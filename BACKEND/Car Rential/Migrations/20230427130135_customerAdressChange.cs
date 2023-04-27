using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Car_Rential.Migrations
{
    /// <inheritdoc />
    public partial class customerAdressChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CustromerAddresses_Custormers_CustormerId",
                table: "CustromerAddresses");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Custormers_CustormerId",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Reservations_CustormerId",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_CustromerAddresses_CustormerId",
                table: "CustromerAddresses");

            migrationBuilder.DropColumn(
                name: "CustormerId",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "CustormerId",
                table: "CustromerAddresses");

            migrationBuilder.RenameColumn(
                name: "CustomerAddressId",
                table: "Custormers",
                newName: "CustromerAddressId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_CustomerId",
                table: "Reservations",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Custormers_CustromerAddressId",
                table: "Custormers",
                column: "CustromerAddressId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Custormers_CustromerAddresses_CustromerAddressId",
                table: "Custormers",
                column: "CustromerAddressId",
                principalTable: "CustromerAddresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Custormers_CustomerId",
                table: "Reservations",
                column: "CustomerId",
                principalTable: "Custormers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Custormers_CustromerAddresses_CustromerAddressId",
                table: "Custormers");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Custormers_CustomerId",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Reservations_CustomerId",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Custormers_CustromerAddressId",
                table: "Custormers");

            migrationBuilder.RenameColumn(
                name: "CustromerAddressId",
                table: "Custormers",
                newName: "CustomerAddressId");

            migrationBuilder.AddColumn<int>(
                name: "CustormerId",
                table: "Reservations",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CustormerId",
                table: "CustromerAddresses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_CustormerId",
                table: "Reservations",
                column: "CustormerId");

            migrationBuilder.CreateIndex(
                name: "IX_CustromerAddresses_CustormerId",
                table: "CustromerAddresses",
                column: "CustormerId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_CustromerAddresses_Custormers_CustormerId",
                table: "CustromerAddresses",
                column: "CustormerId",
                principalTable: "Custormers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Custormers_CustormerId",
                table: "Reservations",
                column: "CustormerId",
                principalTable: "Custormers",
                principalColumn: "Id");
        }
    }
}
