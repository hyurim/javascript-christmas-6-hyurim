import ERROR from "../constants/error.js";
import InputError from "../errors/InputError.js";

const dateIsValid = (date) => {
  validTest(date);
  return true;
};

const validTest = (date) => {
  if (!/^([1-9]|[12][0-9]|3[0-1])$/.test(date)) {
    throw new InputError(ERROR.invalid_date_error_message);
  }
};

export default dateIsValid;
