using Car_Rential.Entieties;
using FluentValidation;

namespace Car_Rential.Model.Validators
{
    public class RegisterCarValidator : AbstractValidator<InputCarDto>
    {
        private readonly string errorMessage =
            "The input must contain only letters and cannot contain whitespace. Maximum length is 50 characters.";

        public RegisterCarValidator(RentalDbContext _dbContext)
        {
            RuleFor(c => c.Model).Matches(@"^[a-zA-Z]{1,50}$").WithMessage(errorMessage).NotEmpty();

            RuleFor(c => c.Brand).Matches(@"^[a-zA-Z]{1,50}$").WithMessage(errorMessage).NotEmpty();

            RuleFor(c => c.pricePerDay)
                .NotEmpty()
                .GreaterThanOrEqualTo(1)
                .WithMessage("Price can not be negative");

            RuleFor(x => x.SeatsNumber).GreaterThan(0).LessThan(9).NotEmpty();

            RuleFor(x => x.SeatsNumber).GreaterThan(1).LessThan(6).NotEmpty();

            RuleFor(c => c.GearboxType)
                .Matches(@"^[a-zA-Z]{1,50}$")
                .WithMessage(errorMessage)
                .NotEmpty();

            RuleFor(c => c.Color).Matches(@"^[a-zA-Z]{1,50}$").WithMessage(errorMessage).NotEmpty();

            RuleFor(x => x.ProductionYear).GreaterThan(1900).LessThan(2024).NotEmpty();

            RuleFor(x => x.Mileage).GreaterThan(0).NotEmpty();

            RuleFor(c => c.FuelType)
                .Matches(@"^[a-zA-Z]{1,50}$")
                .WithMessage(errorMessage)
                .NotEmpty();

            RuleFor(c => c.Type).NotEmpty();

            RuleFor(c => c.RegistrationNumber)
                .Matches(@"^[A-Z]{2,3}\s{0,1}[0-9A-Z]{4}$")
                .WithMessage(
                    "Invalid license plate number format. Please enter a valid license plate number in the format: ABC 1234 or AB 1234 or ABC1234 or ABC 1234."
                )
                .NotEmpty()
                .Custom(
                    (value, context) =>
                    {
                        var isUsed = _dbContext.Cars.Any(y => y.RegistrationNumber == value);
                        if (isUsed)
                        {
                            context.AddFailure(
                                "RegistrationNumber",
                                "Registration Number must be unique"
                            );
                        }
                    }
                );

            RuleFor(c => c.Description).NotEmpty();
        }
    }
}
