import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput (data) {
    let errors = {};

    if (Validator.isNull(data.name)) {
        errors.name = 'This field is required';
    }
    if (Validator.isNull(data.phoneNumber)) {
        errors.phoneNumber = 'This field is required';
    }
    if (Validator.isNull(data.modeofpayment)) {
        errors.modeofpayment = 'This field is required';
    }
    if (Validator.isNull(data.address)) {
        errors.address = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}