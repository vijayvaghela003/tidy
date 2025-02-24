import {ValidatorParams,ValidatorFn, decoratorRegistrationCaller } from '@nattyjs/validation-decorators'
import { ReactiveFormContainer } from './const/reactive-form-container'
decoratorRegistrationCaller.register = ReactiveFormContainer.register as any;
export * from './functions/use-form';
export * from './const/configure';
export * from './interfaces/param-info';
export * from './types/validator-func'
export { 
    
    
    decoratorAllOfValidation as allOf,
    decoratorRequiredValidation as required,
    decoratorNumericValidation as numeric,
    decoratorAlphaValidation as alpha,
    decoratorAlphaNumericValidation as alphaNumeric,
    decoratorAsciiValidation as ascii,
    decoratorContainsValidation as contains,
    decoratorCreditCardValidation as creditCard,
    decoratorCusipValidation as cusip,
    decoratorDataUriValidation as dataUri,
    decoratorDateValidation as date,
    decoratorDifferentValdiation as different,
    decoratorDigitValidation as digit,
    decoratorEmailValidation as email,
    decoratorEndsWithValidation as endsWith,
    decoratorEvenValidation as even,
    decoratorExtensionValidation as extension,
    decoratorFactorValidation as factor,
    decoratorGreaterThanEqualToValidation as greaterThanEqualTo,
    decoratorGreaterThanValidation as greaterThan,
    decoratorHexColorValidation as hexColor,
    decoratorIpValidation as ip,
    decoratorJsonValidation as json,
    decoratorLatitudeValdiation as latitude,
    decoratorLatLongValidation as latLong,
    decoratorLeapYearValidation as leapYear,
    decoratorLessThanEqualToValidation as lessThanEqualTo,
    decoratorLessThanValidation as lessThan,
    decoratorLongitudeValidation as longitude,
    decoratorLowercaseValidation as lowerCase,
    decoratorMacValidation as mac,
    decoratorMaxDateValidation as maxDate,
    decoratorMaxLengthValidation as maxLength,
    decoratorMaxNumberValidation as maxNumber,
    decoratorMaxTimeValidation as maxTime,
    decoratorMinDateValidation as minDate,
    decoratorMinLengthValidation as minLength,
    decoratorMinNumberValidation as minNumber,
    decoratorMinTimeValidation as minTime,
    decoratorNoneOfValidation as noneOf,
    decoratorNotEmptyValidation as notEmpty,
    decoratorOddValidation as odd,
    decoratorOneOfValidation as oneOf,
    decoratorPasswordValdiation as password,
    decoratorPatternValidation as pattern,
    decoratorPortValidation as port,
    decoratorPrimeNumberValidation as primeNumber,
    decoratorRangeValidation as range,
    decoratorRequiredTrueValidation as requiredTrue,
    decoratorStartsWithValidation as startsWith,
    decoratorUpperCaseValidation as upperCase,
    decoratorUrlValidation as url, prop,
    decoratorBlacklistSanitizer as blacklist,
    decoratorEscapeSanitizer as escape,
    decoratorLtrimSanitizer as ltrim,
    decoratorPrefixSanitizer as prefix,
    decoratorRtrimSanitizer as rtrim,
    decoratorStripLowSanitizer as stripLow,
    decoratorSuffixSanitizer as suffix,
    decoratorToBooleanSanitizer as toBoolean,
    decoratorToDateSanitizer as toDate,
    decoratorToIntSanitizer as toInt,
    decoratorToStringSanitizer as toString,
    decoratorTrimSanitizer as trim,
    decoratorWhitelistSanitizer as whitelist,
    decoratorSanitizeSanitizer as sanitize


} from '@nattyjs/validation-decorators'
export * from './const/validators'
export * from './enums/run-validator-strategy'
export * from './interfaces/i-form-group'