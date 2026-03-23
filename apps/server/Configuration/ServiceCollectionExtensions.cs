using System.Net.Http.Headers;

namespace TmdbProxy.Api.Configuration;

public static class ServiceCollectionExtensions
{
  public static IServiceCollection AddTmdbProxy(this IServiceCollection services, IConfiguration configuration)
  {
    var tmdbOptions = configuration
      .GetSection(TmdbOptions.SectionName)
      .Get<TmdbOptions>()
      ?? throw new InvalidOperationException("TMDB configuration is missing.");

    if (string.IsNullOrWhiteSpace(tmdbOptions.BaseUrl))
    {
      throw new InvalidOperationException("Tmdb:BaseUrl is not configured.");
    }

    services.Configure<TmdbOptions>(
      configuration.GetSection(TmdbOptions.SectionName)
    );

    services.AddHttpClient("tmdb", (client) =>
    {
      client.BaseAddress = new Uri(tmdbOptions.BaseUrl);
      client.DefaultRequestHeaders.Accept.Add(
        new MediaTypeWithQualityHeaderValue("application/json")
      );
    });

    services.AddCors((options) =>
    {
      options.AddPolicy("ClientWeb", (policy) =>
      {
        policy
          .WithOrigins("http://localhost:4200", "http://127.0.0.1:4200")
          .AllowAnyHeader()
          .AllowAnyMethod();
      });
    });

    services.AddScoped<TmdbProxy.Api.Services.ITmdbProxyService, TmdbProxy.Api.Services.TmdbProxyService>();

    return services;
  }
}
