namespace TmdbProxy.Api.Configuration;

public sealed class TmdbOptions
{
  public const string SectionName = "Tmdb";

  public string ApiToken { get; init; } = string.Empty;

  public string BaseUrl { get; init; } = string.Empty;
}
