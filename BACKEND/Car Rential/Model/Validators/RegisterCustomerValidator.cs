using Car_Rential.Entieties;
using FluentValidation;

namespace Car_Rential.Model.Validators
{
    public class RegisterCustomerValidator : AbstractValidator<RegisterCustomerDto>
    {
        public RegisterCustomerValidator(RentialDbContext dbContext)
        {
            RuleFor(c => c.FirstName)
                .NotEmpty()
                .Matches("^[a-zA-Z]+$")
                .WithMessage("FirstName must not contain white spaces")
                .MaximumLength(30);

            RuleFor(c => c.LastName)
                .NotEmpty()
                .Matches("^[a-zA-Z]+$")
                .WithMessage("LastName must not contain white spaces")
                .MaximumLength(30);

            RuleFor(c => c.PhoneNumber)
                .NotEmpty()
                .Matches(@"^[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3}$")
                .Custom(
                    (value, contex) =>
                    {
                        var result = dbContext.Custormers.Any(c => c.PhoneNumber == value);
                        if (result)
                        {
                            contex.AddFailure("PhoneNumber", "PhoneNumber must be uniqe");
                        }
                    }
                );

            RuleFor(c => c.Email)
                .NotEmpty()
                .Matches(@"^[^\s]+$")
                .WithMessage("Email must not contain white spaces")
                .EmailAddress()
                .Custom(
                    (value, contex) =>
                    {
                        var result = dbContext.Custormers.Any(c => c.Email == value);
                        if (result)
                        {
                            contex.AddFailure("Email", "Email must be uniqe");
                        }
                    }
                );

            RuleFor(c => c.Pesel)
                .NotEmpty()
                .Matches(@"^(\d{11})$")
                .WithMessage("Pesel must be 11 digits")
                .Custom(
                    (value, contex) =>
                    {
                        var result = dbContext.Custormers.Any(c => c.Pesel == value);
                        if (result)
                        {
                            contex.AddFailure("Pesel", "Pesel must be uniqe");
                        }
                    }
                );

            RuleFor(c => c.Password)
                .NotEmpty()
                .Matches(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")
                .WithMessage(
                    "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character [@$!%*?&], and be at least 8 characters long."
                );

            RuleFor(c => c.ConfirmPassword).Equal(p => p.Password);
        }
    }
}
