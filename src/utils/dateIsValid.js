import ERROR from "../constants/error.js";
import InputError from "../errors/InputError.js";

/**
 * 입력된 날짜가 유효한지 검사함.
 * 
 * @param {string} date - 날짜 정보
 * @returns {boolean} - 날짜가 유효하면 true, 유효하지 않을 경우 예외 발생
 * @throws {InputError} - 날짜가 유효하지 않은 경우 발생하는 예외
 */
const dateIsValid = (date) => {
  validTest(date);
  return true;
};

/**
 * 날짜 형식이 맞는지 검사.
 * 
 * @param {string} date - 날짜 정보
 * @throws {InputError} - 날짜 형식이 맞지 않는 경우 발생하는 예외
 */
const validTest = (date) => { 
  const regex = /^([1-9]|[12][0-9]|3[0-1])$/
  if (!regex.test(date)) {
    throw new InputError(ERROR.invalid_date_error_message);
  }
};

export default dateIsValid;
