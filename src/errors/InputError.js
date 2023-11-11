import messageFormat from "../constants/messageFormat.js";

class InputError extends Error {
  constructor(message) {
    super(messageFormat.errorMessage(message));
    this.name = 'InputError';
  }
}

export default InputError;