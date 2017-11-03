import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput (data) {
    let errors = {};

    if (Validator.isNull(data.name)) {
        errors.name = 'This field is required';
    }
    if(!(Validator.isEmail(data.email))) {
        errors.email = 'Enter a Valid Email';
    }
    if (Validator.isNull(data.email)) {
        errors.email = 'This field is required';
    }
    if (Validator.isNull(data.phone)) {
        errors.phone = 'This field is required';
    }
    if (Validator.isNull(data.city)) {
        errors.city = 'This field is required';
    }
    if (Validator.isNull(data.paymode)) {
        errors.paymode = 'This field is required';
    }
    if (Validator.isNull(data.address)) {
        errors.address = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}