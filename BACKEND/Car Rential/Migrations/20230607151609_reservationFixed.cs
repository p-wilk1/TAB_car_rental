using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Car_Rential.Migrations
{
    /// <inheritdoc />
    public partial class reservationFixed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Reservations_ReturnLocationId",
                table: "Reservations"
            );

            migrationBuilder.DropColumn(name: "ReturnLocationId", table: "Reservations");

            migrationBuilder.AlterColumn<int>(
                name: "ReturnLocationId",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true
            );

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_ReturnLocationId",
                table: "Reservations",
                column: "ReturnLocationId",
                unique: true
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Reservations_ReturnLocationId",
                table: "Reservations"
            );

            migrationBuilder.AlterColumn<int>(
                name: "ReturnLocationId",
                table: "Reservations",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int"
            );

            migrationBuilder.AddColumn<int>(
                name: "ReturnLocationId",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0
            );

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_ReturnLocationId",
                table: "Reservations",
                column: "ReturnLocationId"
            );
        }
    }
}
