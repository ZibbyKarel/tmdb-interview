namespace TmdbProxy.Api.Endpoints;

public static class HealthEndpoints
{
  public static IEndpointRouteBuilder MapHealthEndpoints(this IEndpointRouteBuilder app)
  {
    app.MapGet("/", () =>
    {
      return Results.Ok(new
      {
        name = "tmdb-proxy",
        message = "TMDB proxy backend is running.",
      });
    });

    app.MapGet("/health", () =>
    {
      return Results.Ok(new
      {
        status = "ok",
      });
    });

    return app;
  }
}
