using TmdbProxy.Api.Services;

namespace TmdbProxy.Api.Endpoints;

public static class TmdbProxyEndpoints
{
  public static IEndpointRouteBuilder MapTmdbProxyEndpoints(this IEndpointRouteBuilder app)
  {
    app.MapMethods("/{**path}", new[] { "GET", "POST", "PUT", "PATCH", "DELETE" }, async (
      HttpContext context,
      ITmdbProxyService tmdbProxyService
    ) =>
    {
      await tmdbProxyService.ProxyAsync(context);
    });

    return app;
  }
}
