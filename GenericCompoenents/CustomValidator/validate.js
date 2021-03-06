const validate = (val, rules, connectedValue) => {
    let isValid = true;
    for (let rule in rules) {
        switch (rule) {
            case "isEmail":
                isValid = isValid && emailValidator(val);
                break;
            case "minLength":
                isValid = isValid && minLengthValidator(val, rules[rule]);
                break;
            case "equalTo":
                isValid = isValid && equalToValidator(val, connectedValue[rule]);
                break;
            case "notEmpty":
                isValid = isValid && notEmptyValidator(val);
                break;
            case "isMobileNumber":
                isValid = isValid && isMobileNumber(val);
                break;
            case "otp":
                isValid = isValid && isOtp(val);
                break;
            case "isPan":
                isValid = isValid && isPan(val);
                break;
            default:
                isValid = true;
        }
    }
    return isValid;
};

const emailValidator = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        val
    );
};

const minLengthValidator = (val, minLength) => {
    return val.length >= minLength;
};

const equalToValidator = (val, checkValue) => {
    return val === checkValue;
};

const notEmptyValidator = val => {
    return val.trim() !== "";
};

const isMobileNumber = val => {
    return val.length === 10;
};

const isOtp = val => {
    return val.length === 4;
};

const isPan = val => {
    var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if (regpan.test(val)) {
        return true;
    } else {
        return false;
    }
};



export default validate;

