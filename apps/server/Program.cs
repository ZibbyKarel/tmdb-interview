using TmdbProxy.Api.Configuration;
using TmdbProxy.Api.Endpoints;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTmdbProxy(builder.Configuration);

var app = builder.Build();

app.UseCors("ClientWeb");

app.MapHealthEndpoints();
app.MapTmdbProxyEndpoints();

app.Run();
