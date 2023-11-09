const foodIsValid = (food) => {
  validTest(food);
  return true;
};

const validTest = (food) => {
  if (food.split(',').length > 20) {
    throw new Error("[ERROR]");
  }
};


export default foodIsValid;