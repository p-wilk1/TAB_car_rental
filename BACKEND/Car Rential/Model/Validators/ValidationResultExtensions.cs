using FluentValidation.Results;
using iText.Commons.Utils;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;

public static class ValidationResultExtensions
{
    public static string[] FormatValidationErrors(this ValidationResult validationResult)
    {
        List<string> errors = new List<string>();

        foreach (var failure in validationResult.Errors)
        {
            errors.Add(failure.ErrorMessage);
            Console.WriteLine(failure.ErrorMessage);
        }

        return errors.ToArray();
    }
}
