const dateIsValid = (date) => {
  validTest(date);
  return true;
};

const validTest = (date) => {
  if (!Number.isInteger(Number(date))) {
    throw new Error("[ERROR]");
  }
};


export default dateIsValid;