import { validationForms } from "../../const/natty-forms";
import { ValidatorParams } from "../../interfaces/validator-params";

const ISO_DATE_REGEX = /^(?:[\+-]?\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[\.,]\d+(?!:))?)?(?:\2[0-5]\d(?:[\.,]\d+)?)?(?:[zZ]|(?:[\+-])(?:[01]\d|2[0-3]):?(?:[0-5]\d)?)?)?)?$/;
export class DateProvider {
    isDate(value: any): Boolean {
        return value instanceof Date && !isNaN(value.valueOf());
    }

    private getRegex(dateFormat: string): RegExp {
        var regExp: string;
        switch (dateFormat) {
            case 'ymd':
                regExp = "^(?:[0-9]{4})-(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])$";
                break;
            case 'dmy':
                regExp = "^(3[01]|[12][0-9]|0?[1-9])-(1[0-2]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
                break;
            case 'mdy':
                regExp = "^(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
                break;
        }
        return new RegExp(regExp);
    }

    regex(config:any) {
        const regExp = this.getRegex(config.dateFormat || validationForms.formConfig.dateConfig.format);
        return regExp;
    }

    getDate(value: string | Date,configDateFormat:string = undefined,isBaseFormat: boolean = false): Date {
        let year, month, day;
        if (!this.isDate(value)) {
            let seperator: string;
            let dateFormat: string;
            if (ISO_DATE_REGEX.test(<string>value)) {
                return new Date(value);
            } else {
                seperator = validationForms.formConfig.dateConfig.seperator;
                dateFormat = configDateFormat || validationForms.formConfig.dateConfig.format;
            }

            switch (dateFormat) {
                case 'ymd':
                    [year, month, day] = (<String>value).split(seperator).map((val: string) => +val);
                    break;
                case 'dmy':
                    [day, month, year] = (<String>value).split(seperator).map((val: string) => +val);
                    break;
                case 'mdy':
                    [month, day, year] = (<String>value).split(seperator).map((val: string) => +val);
                    break;
            }
            return new Date(year, month - 1, day);
        } else
            return <Date>value;
    }

    isValid(value: string | Date, config: any): Boolean {
        if (config && config.isValid)
            return config.isValid(value);
        if (typeof value == "string") {
            if (config && config.allowISODate && ISO_DATE_REGEX.test(<string>value))
                return true;
            let seperator = validationForms.formConfig.dateConfig.seperator;
            if (value.split(seperator).length !== 3)
                return false;
            value = value.replace(seperator, '-').replace(seperator, '-');
            return this.regex(config).test(value);
        } else
            return this.isDate(value);
    }

    getConfigDateValue(config) {
        let date = config.value;
        if (config.value && typeof config.value == "string") {
            date = this.getDate(config.value,config.dateFormat, true);
        }
        return date;
    }

    getCompareDate(config: any, control: ValidatorParams) {
        let date = this.getConfigDateValue(config);
        if (config.fieldName) {
            let checkControlValue: any = control.current[config.fieldName]
            if (checkControlValue) {
                date = this.getDate(checkControlValue, config.dateFormat)
            }
        }
        return date;
    }
}
