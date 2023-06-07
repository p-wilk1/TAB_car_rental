using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Car_Rential.Migrations
{
    /// <inheritdoc />
    public partial class reservationFixed2Try : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Offices_PickupLocationId",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Reservations_ReturnLocationId",
                table: "Reservations");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_ReturnLocationId",
                table: "Reservations",
                column: "ReturnLocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Offices_PickupLocationId",
                table: "Reservations",
                column: "PickupLocationId",
                principalTable: "Offices",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Offices_PickupLocationId",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Reservations_ReturnLocationId",
                table: "Reservations");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_ReturnLocationId",
                table: "Reservations",
                column: "ReturnLocationId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Offices_PickupLocationId",
                table: "Reservations",
                column: "PickupLocationId",
                principalTable: "Offices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
