import ERROR from "../constants/error.js";
import { MENU, DRINK_MENU } from "../constants/menu.js";
import { NUMBERS } from "../constants/numbers.js";
import { SYMBOLS } from "../constants/prompt.js";
import orderMenu from "../domain/orderMenu.js";
import InputError from "../errors/InputError.js";

const { comma, blank } = SYMBOLS;
const { zero, menu_limit } = NUMBERS;
const { invalid_order_error_message } = ERROR;

const foodIsValid = (order) => {
  const { menuNames, quantities, orderMenu } = parseOrder(order);

  validateMultipleOrders(orderMenu);
  validateDuplication(menuNames);
  validateOnlyDrink(menuNames);
  validateMenu(menuNames);
  validateOrderQuantity(quantities);
  validateZeroInclude(quantities);
  validateNumbers(quantities);

  return true;
};

const parseOrder = (order) => {
  const menuNames = order.match(/[^\d,-]+/g);
  const quantities = order.match(/\d+/g);
  const orderMenu = order.split(comma);
  return { menuNames, quantities, orderMenu };
};


const validateMultipleOrders = (orderMenu) => {
  orderMenu.forEach(validateOrderFormat);
  return true;
};

const validateOrderFormat = (order) => {
  const regex = /^[가-힣]+\-\d+$/;
  if (!regex.test(order)) {
    throw new InputError(invalid_order_error_message);
  }
};

const validateDuplication = (menuNames) => {
  if (menuNames.length !== [...new Set(menuNames)].length) {
    throw new InputError(invalid_order_error_message);
  }
};

const validateOnlyDrink = (menuNames) => {
  const orders = menuNames.filter((drink) => !DRINK_MENU.includes(drink)).length;
  if (orders === zero) {
    throw new InputError(invalid_order_error_message);
  }
};

const validateMenu = (menuNames) => {
  const menuCheck = menuNames.every((name) =>
    MENU.some((item) => item.menu === name)
  );
  if (!menuCheck) {
    throw new InputError(invalid_order_error_message);
  }
};

const validateOrderQuantity = (quantities) => {
  const quantity = quantities.reduce((total, amount) => total + parseInt(amount, 10), zero);
  if (quantity > menu_limit) {
    throw new InputError(invalid_order_error_message);
  }
};

const validateZeroInclude = (quantities) => {
  if (quantities.includes(`${zero}`)) {
    throw new InputError(invalid_order_error_message);
  }
};

const validateNumbers = (quantities) => {
  if (!quantities.every((value) => value.trim() !== blank && Number.isInteger(Number(value)))) {
    throw new InputError(invalid_order_error_message);
  }
};

export default foodIsValid;
