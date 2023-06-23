using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

public class CustomObjectModelValidator : IObjectModelValidator
{
    private readonly IModelValidatorProvider[] _validatorProviders;

    public CustomObjectModelValidator(IEnumerable<IModelValidatorProvider> validatorProviders)
    {
        _validatorProviders = validatorProviders.ToArray();
    }

    public void Validate(
        ActionContext actionContext,
        ValidationStateDictionary validationState,
        string prefix,
        object model
    )
    {
        foreach (var entry in actionContext.ModelState.Values)
        {
            // or ModelValidationState.Valid
            entry.ValidationState = ModelValidationState.Skipped;
        }
    }
}
