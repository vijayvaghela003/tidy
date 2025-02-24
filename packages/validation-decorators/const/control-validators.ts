import {
  requiredValidator,
  allOfValidator,
  alphaNumericValidator,
  alphaValidator,
  asciiValidator,
  composeValidator,
  containsValidator,
  creditCardValidator,
  cusipValidator,
  dataUriValidator,
  dateValidator,
  differentValidator,
  digitValidator,
  emailValidator,
  endsWithValidator,
  evenValidator,
  extensionValidator,
  factorValidator,
  greaterThanEqualToValidator,
  greaterThanValidator,
  gridValidator,
  hexColorValidator,
  ipValidator,
  jsonValidator,
  latLongValidator,
  latitudeValidator,
  leapYearValidator,
  lessThanEqualToValidator,
  lessThanValidator,
  longitudeValidator,
  lowercaseValidator,
  macValidator,
  maxDateValidator,
  maxLengthValidator,
  maxNumberValidator,
  maxTimeValidator,
  minDateValidator,
  minLengthValidator,
  minNumberValidator,
  minTimeValidator,
  noneOfValidator,
  notEmptyValidator,
  numericValidator,
  oddValidator,
  oneOfValidator,
  passwordValidator,
  patternValidator,
  portValidator,
  primeNumberValidator,
  rangeValidator,
  startsWithValidator,
  timeValidator,
  uppercaseValidator,
  urlValidator,
  customValidator,
  compareValidator,
} from "../validators";

export const ControlValidators = {
  required: requiredValidator,
  allOf: allOfValidator,
  alpha: alphaValidator,
  alphaNumeric: alphaNumericValidator,
  ascii: asciiValidator,
  compare:compareValidator,
  compose:composeValidator,
  custom:customValidator,
  contains: containsValidator,
  creditCard: creditCardValidator,
  cusip: cusipValidator,
  dataUri: dataUriValidator,
  date: dateValidator,
  different: differentValidator,
  digit: digitValidator,
  email: emailValidator,
  endsWith: endsWithValidator,
  even: evenValidator,
  extension: extensionValidator,
  factor: factorValidator,
  greaterThan: greaterThanValidator,
  greaterThanEqualTo: greaterThanEqualToValidator,
  grid: gridValidator,
  hexColor: hexColorValidator,
  ip: ipValidator,
  json: jsonValidator,
  latLong: latLongValidator,
  lattitude: latitudeValidator,
  leapYear: leapYearValidator,
  lessThanEqualTo: lessThanEqualToValidator,
  lessThan: lessThanValidator,
  longitude: longitudeValidator,
  lowercase: lowercaseValidator,
  mac: macValidator,
  maxDate: maxDateValidator,
  maxLength: maxLengthValidator,
  maxNumber: maxNumberValidator,
  maxTime: maxTimeValidator,
  minDate: minDateValidator,
  minLength:minLengthValidator,
  minNumber: minNumberValidator,
  minTime: minTimeValidator,
  noneOf: noneOfValidator,
  notEmpty: notEmptyValidator,
  numeric: numericValidator,
  odd: oddValidator,
  oneOf: oneOfValidator,
  password: passwordValidator,
  pattern: patternValidator,
  port: portValidator,
  primeNumber: primeNumberValidator,
  range: rangeValidator,
  startsWith: startsWithValidator,
  time: timeValidator,
  uppercase: uppercaseValidator,
  url: urlValidator,
};
