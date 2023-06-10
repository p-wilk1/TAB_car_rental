using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Car_Rential.Migrations
{
    /// <inheritdoc />
    public partial class photoAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageData",
                table: "Cars");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "ImageData",
                table: "Cars",
                type: "varbinary(max)",
                nullable: true);
        }
    }
}
