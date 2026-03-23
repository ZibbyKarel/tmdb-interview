FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src

COPY apps/server/TmdbProxy.Api.csproj apps/server/
RUN dotnet restore apps/server/TmdbProxy.Api.csproj

COPY apps/server ./apps/server

RUN dotnet publish apps/server/TmdbProxy.Api.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0

WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://0.0.0.0:5137

EXPOSE 5137

ENTRYPOINT ["dotnet", "TmdbProxy.Api.dll"]
