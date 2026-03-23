namespace TmdbProxy.Api.Services;

public interface ITmdbProxyService
{
  Task ProxyAsync(HttpContext context);
}
