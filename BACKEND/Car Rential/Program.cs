using Car_Rential.Entieties;
using Car_Rential.Helpers;
using Car_Rential.Middleware;
using Car_Rential.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NLog.Web;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddScoped<IPasswordHasher<Customer>, PasswordHasher<Customer>>();
builder.Services.AddScoped<ICustomersService, CustomersService>();
builder.Services.AddScoped<ErrorHandlingMiddleware>();
builder.Services.AddScoped<CustomersSeeder>();

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
builder.Host.UseNLog();
builder.Services.AddDbContext<RentialDbContext>(configuration =>
{
    configuration.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionString"));
});

var app = builder.Build();
app.UseMiddleware<ErrorHandlingMiddleware>();

var scope = app.Services.CreateScope();
var seeder = scope.ServiceProvider.GetRequiredService<CustomersSeeder>();

seeder.Seeder();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Registration Task");
});

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
