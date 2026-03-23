using System.Net.Http.Headers;
using Microsoft.Extensions.Options;
using TmdbProxy.Api.Configuration;

namespace TmdbProxy.Api.Services;

public sealed class TmdbProxyService : ITmdbProxyService
{
  private readonly IHttpClientFactory _httpClientFactory;
  private readonly TmdbOptions _tmdbOptions;

  public TmdbProxyService(
    IHttpClientFactory httpClientFactory,
    IOptions<TmdbOptions> tmdbOptions
  )
  {
    _httpClientFactory = httpClientFactory;
    _tmdbOptions = tmdbOptions.Value;
  }

  public async Task ProxyAsync(HttpContext context)
  {
    if (string.IsNullOrWhiteSpace(_tmdbOptions.ApiToken))
    {
      context.Response.StatusCode = StatusCodes.Status500InternalServerError;

      await context.Response.WriteAsJsonAsync(new
      {
        error = "TMDB API token is not configured.",
      });

      return;
    }

    var httpClient = _httpClientFactory.CreateClient("tmdb");

    using var requestMessage = new HttpRequestMessage(
      new HttpMethod(context.Request.Method),
      $"{context.Request.Path}{context.Request.QueryString}"
    );

    requestMessage.Headers.Authorization = new AuthenticationHeaderValue(
      "Bearer",
      _tmdbOptions.ApiToken
    );

    foreach (var header in context.Request.Headers)
    {
      if (
        string.Equals(header.Key, "Host", StringComparison.OrdinalIgnoreCase)
        || string.Equals(header.Key, "Authorization", StringComparison.OrdinalIgnoreCase)
        || string.Equals(header.Key, "Content-Length", StringComparison.OrdinalIgnoreCase)
      )
      {
        continue;
      }

      if (!requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray()))
      {
        requestMessage.Content ??= new StreamContent(context.Request.Body);
        requestMessage.Content.Headers.TryAddWithoutValidation(
          header.Key,
          header.Value.ToArray()
        );
      }
    }

    if (
      context.Request.ContentLength > 0
      || context.Request.Headers.ContainsKey("Transfer-Encoding")
    )
    {
      requestMessage.Content ??= new StreamContent(context.Request.Body);
    }

    using var responseMessage = await httpClient.SendAsync(
      requestMessage,
      HttpCompletionOption.ResponseHeadersRead,
      context.RequestAborted
    );

    context.Response.StatusCode = (int)responseMessage.StatusCode;

    foreach (var header in responseMessage.Headers)
    {
      context.Response.Headers[header.Key] = header.Value.ToArray();
    }

    foreach (var header in responseMessage.Content.Headers)
    {
      context.Response.Headers[header.Key] = header.Value.ToArray();
    }

    context.Response.Headers.Remove("transfer-encoding");

    await responseMessage.Content.CopyToAsync(context.Response.Body);
  }
}
