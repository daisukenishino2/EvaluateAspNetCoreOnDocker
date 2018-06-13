FROM microsoft/aspnetcore:latest AS base
WORKDIR /app
EXPOSE 5000

FROM microsoft/aspnetcore-build:latest AS build
WORKDIR /src
COPY WebApplication1.sln ./
COPY WebApplication1/WebApplication1.csproj WebApplication1/
RUN dotnet restore -nowarn:msb3202,nu1503
COPY . .
WORKDIR /src/WebApplication1
RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "WebApplication1.dll"]