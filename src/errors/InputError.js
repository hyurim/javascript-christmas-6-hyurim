import messageFormat from "../constants/messageFormat.js";

/**
 * 사용자 입력과 관련된 오류를 나타내는 클래스입니다.
 * @class
 * @extends {Error}
 * @param {string} message - 오류 메시지
 */
class InputError extends Error {
  constructor(message) {
    super(messageFormat.errorMessage(message));
    this.name = 'InputError';
  }
}

export default InputError;