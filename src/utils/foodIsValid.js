import ERROR from "../constants/error.js";
import { MENU, DRINK_MENU } from "../constants/menu.js";
import { NUMBERS } from "../constants/numbers.js";

const foodIsValid = (order) => {
  const menuNames = order.match(/[^\d,-]+/g);
  const quantities = order.match(/\d+/g);

  validateMultipleOrders(order);
  validateDuplication(menuNames);
  validateOnlyDrink(menuNames);
  validateMenu(menuNames);
  validateOrderQuantity(quantities);
  validateNumbers(quantities);
  return true;
};

const validateMultipleOrders = (orders) => {
  const orderArray = orders.split(",");
  orderArray.forEach((order) => validateOrderFormat(order));
  return true;
};

const validateOrderFormat = (order) => {
  const regex = /^[가-힣]+\-\d+$/;
  if (!regex.test(order)) {
    throw new Error(ERROR.invalid_order_error_message);
  }
};

const validateDuplication = (menuNames) => {
  if (menuNames.length !== [...new Set(menuNames)].length) {
    throw new Error(ERROR.invalid_order_error_message);
  }
};

const validateOnlyDrink = (menuNames) => {
  const orders = menuNames.filter(
    (drink) => !DRINK_MENU.includes(drink)
  ).length;
  if (orders === NUMBERS.zero) {
    throw new Error(ERROR.invalid_order_error_message);
  }
};

const validateMenu = (menuNames) => {
  const menuCheck = menuNames.every((name) =>
    MENU.some((item) => item.menu === name)
  );
  if (!menuCheck) {
    throw new Error(ERROR.invalid_order_error_message);
  }
};

const validateNumbers = (quantities) => {
  if (
    !quantities.every(
      (value) => value.trim() !== "" && Number.isInteger(Number(value))
    )
  ) {
    throw new Error(ERROR.invalid_order_error_message);
  }
};

const validateOrderQuantity = (quantities) => {
  const quantity = quantities.reduce(
    (total, amount) => total + parseInt(amount, 10),
    NUMBERS.zero
  );
  if (quantity > 20) {
    throw new Error(ERROR.invalid_order_error_message);
  }
};
export default foodIsValid;
