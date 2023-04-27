using Car_Rential;
using Car_Rential.Entieties;
using Car_Rential.Helpers;
using Car_Rential.Middleware;
using Car_Rential.Model;
using Car_Rential.Model.Validators;
using Car_Rential.Services;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NLog.Web;
using System.Reflection;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddFluentValidation();
builder.Services.AddScoped<ErrorHandlingMiddleware>();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
builder.Host.UseNLog();
builder.Services.AddDbContext<RentialDbContext>(configuration =>
{
    configuration.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionString"));
});

var authenticationSettings = new AuthenticationSettings();

builder.Configuration.GetSection("JWTInfo").Bind(authenticationSettings);

builder.Services.AddSingleton(authenticationSettings);

builder.Services
    .AddAuthentication(option =>
    {
        option.DefaultAuthenticateScheme = "Bearer";
        option.DefaultScheme = "Bearer";
        option.DefaultChallengeScheme = "Bearer";
    })
    .AddJwtBearer(cfg =>
    {
        cfg.RequireHttpsMetadata = false;
        cfg.SaveToken = true;
        cfg.TokenValidationParameters = new TokenValidationParameters
        {
            ValidIssuer = authenticationSettings.JwtIssuer,
            ValidAudience = authenticationSettings.JwtIssuer,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(authenticationSettings.JwtKey)
            ),
        };
    });

builder.Services.AddScoped<IPasswordHasher<Customer>, PasswordHasher<Customer>>();
builder.Services.AddScoped<ICustomersService, CustomersService>();
builder.Services.AddScoped<IValidator<CustomerInputDto>, RegisterCustomerValidator>();
builder.Services.AddScoped<IValidator<CustomerInputDto>, UpdateCustomerValidator>();
builder.Services.AddScoped<CustomersSeeder>();
builder.Services.AddScoped<RegisterCustomerValidator>();
builder.Services.AddScoped<UpdateCustomerValidator>();

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

app.UseAuthentication();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
