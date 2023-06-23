using Car_Rential.Entieties;
using FluentValidation;
using Microsoft.EntityFrameworkCore;

namespace Car_Rential.Model.Validators
{
    public class SeedReservationValidator : AbstractValidator<Reservation>
    {
        public SeedReservationValidator(RentalDbContext _dbContext)
        {
            RuleFor(s => s.StartDate)
                .NotEmpty()
                .Custom(
                    (value, context) =>
                    {
                        var currentTime = DateTime.Now;
                        if (value < currentTime)
                        {
                            context.AddFailure("Reservation can not start in the past");
                        }
                        var endDate = context.InstanceToValidate.EndDate;

                        if (value >= endDate)
                        {
                            context.AddFailure("Return must be later than borrow");
                        }
                    }
                );
            RuleFor(s => s.EndDate)
                .NotEmpty()
                .Custom(
                    (value, context) =>
                    {
                        var currentTime = DateTime.Now;
                        if (value < currentTime)
                        {
                            context.AddFailure("Reservation can not end in the past");
                        }
                    }
                );
            RuleFor(c => c.CarId)
                .NotEmpty()
                .Custom(
                    (value, context) =>
                    {
                        var doesCarExist = _dbContext.Cars.FirstOrDefault(x => x.Id == value);
                        if (doesCarExist == null)
                        {
                            context.AddFailure("Car doesn't exist");
                        }
                    }
                );
            RuleFor(c => c.CustomerId)
                .NotEmpty()
                .Custom(
                    (value, context) =>
                    {
                        var doesCustomerExist = _dbContext.Custormers.FirstOrDefault(
                            x => x.Id == value
                        );
                        if (doesCustomerExist == null)
                        {
                            context.AddFailure("Customer doesn't exist");
                        }
                    }
                );
            RuleFor(c => c.PickupLocationId)
                .NotEmpty()
                .Custom(
                    (value, context) =>
                    {
                        var doesOfficeExist = _dbContext.Offices.FirstOrDefault(x => x.Id == value);
                        if (doesOfficeExist == null)
                        {
                            context.AddFailure("Pickup office doesn't exist");
                        }
                    }
                );
            RuleFor(c => c.ReturnLocationId)
                .NotEmpty()
                .Custom(
                    (value, context) =>
                    {
                        var doesOfficeExist = _dbContext.Offices.FirstOrDefault(x => x.Id == value);
                        if (doesOfficeExist == null)
                        {
                            context.AddFailure("Return office doesn't exist");
                        }
                    }
                );
        }
    }
}
