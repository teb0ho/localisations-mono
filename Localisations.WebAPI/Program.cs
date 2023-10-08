using Localisations.Application;
using Localisations.Persistence;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.

var MyOrigin = "myorigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyOrigin,
        policy =>
        {
            policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddPersistenceModule(builder.Configuration);
builder.Services.AddApplicationModule();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(MyOrigin);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
