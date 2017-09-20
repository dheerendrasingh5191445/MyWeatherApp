using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using MyOwnApi.models;

namespace MyOwnApi.Migrations
{
    [DbContext(typeof(WeatherDbContext))]
    partial class WeatherDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MyOwnApi.models.Favourite", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("cityId");

                    b.Property<string>("cityName");

                    b.Property<string>("comment");

                    b.Property<string>("dateTime");

                    b.Property<string>("description");

                    b.Property<string>("humidity");

                    b.Property<string>("icon");

                    b.Property<string>("pressure");

                    b.Property<string>("temperature");

                    b.Property<string>("windSpeed");

                    b.HasKey("id");

                    b.ToTable("Favourites");
                });

            modelBuilder.Entity("MyOwnApi.models.Login", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("confirmPassword");

                    b.Property<string>("email");

                    b.Property<string>("firstName");

                    b.Property<string>("lastName");

                    b.Property<string>("mobileNumber");

                    b.Property<string>("password");

                    b.HasKey("id");

                    b.ToTable("Logins");
                });
        }
    }
}
