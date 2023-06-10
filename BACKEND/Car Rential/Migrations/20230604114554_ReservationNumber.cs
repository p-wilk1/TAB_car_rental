using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Car_Rential.Migrations
{
    /// <inheritdoc />
    public partial class ReservationNumber : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ReservatonNumber",
                table: "Reservations",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReservatonNumber",
                table: "Reservations");
        }
    }
}
