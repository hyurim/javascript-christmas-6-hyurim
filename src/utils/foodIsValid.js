import ERROR from "../constants/error.js";
import { MENU, DRINK_MENU } from "../constants/menu.js";
import { NUMBERS } from "../constants/numbers.js";
import { SYMBOLS } from "../constants/prompt.js";
import InputError from "../errors/InputError.js";

const { comma, blank } = SYMBOLS;
const { zero, menu_limit } = NUMBERS;
const { invalid_order_error_message } = ERROR;

/**
 * 주문이 유효한지 검사하는 객체
 * 
 * @param {string} order - 주문 정보
 * @returns {boolean} - 주문이 유효하면 true, 그렇지 않으면 false
 * @throws {InputError} - 주문이 유효하지 않은 경우 발생하는 예외
 */
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

/**
 * 입력된 주문을 파싱하여 메뉴 이름, 수량, 주문 목옥으로 반환함.
 * 
 * @param {string} order - 주문 정보
 * @returns {Object} - 메뉴 이름, 수량, 주문 목록이 담긴 객체
 */
const parseOrder = (order) => {
  const menuNames = order.match(/[^\d,-]+/g);
  const quantities = order.match(/\d+/g);
  const orderMenu = order.split(comma);
  return { menuNames, quantities, orderMenu };
};

/**
 * 여러 주문이 있는지 확인하고, 주문 형식이 맞는지 검사.
 *  
 * @param {string[]} orderMenu - 주문 목록
 * @returns {boolean} - 주문이 유효할 경우 true
 */
const validateMultipleOrders = (orderMenu) => {
  orderMenu.forEach(validateOrderFormat);
  return true;
};

/**
 * 주문 형식이 맞는지 검사함.
 * 
 * @param {string} order - 주문 정보
 * @return {InputError} - 주문이 유효하지 않은 경우 발생하는 예외
 */
const validateOrderFormat = (order) => {
  const regex = /^[가-힣]+\-\d+$/;
  if (!regex.test(order)) {
    throw new InputError(invalid_order_error_message);
  }
};

/**
 * 중복된 메뉴가 있는지 검사함.
 * 
 * @param {string[]} menuNames - 주문한 메뉴 이름 배열
 * @throws {InputError} - 중복된 메뉴가 있을 경우 발생하는 예외
 */
const validateDuplication = (menuNames) => {
  if (menuNames.length !== [...new Set(menuNames)].length) {
    throw new InputError(invalid_order_error_message);
  }
};

/**
 * 음료만 있는지 검사함.
 * 
 * @param {string[]} menuNames - 주문한 메뉴 이름 배열
 * @throws {InputError} - 음료만 주문한 경우 발생하는 예외
 */
const validateOnlyDrink = (menuNames) => {
  const orders = menuNames.filter((drink) => !DRINK_MENU.includes(drink)).length;
  if (orders === zero) {
    throw new InputError(invalid_order_error_message);
  }
};

/**
 * 주문한 메뉴가 유효한 검사함.
 * 
 * @param {string[]} menuNames - 주문한 메뉴 이름 배열
 * @throws {InputError} - 주문한 메뉴가 유효하지 않은 경우 발생하는 예외
 */
const validateMenu = (menuNames) => {
  const menuCheck = menuNames.every((name) =>
    MENU.some((item) => item.menu === name)
  );
  if (!menuCheck) {
    throw new InputError(invalid_order_error_message);
  }
};

/**
 * 주문 수량이 제한을 초과하는지 검사함.
 * 
 * @param {string[]} quantities - 주문한 수량 배열
 * @throws {InputError} - 주문 수량이 제한을 초과하는 경우 발생하는 예외.
 */
const validateOrderQuantity = (quantities) => {
  const quantity = quantities.reduce((total, amount) => total + parseInt(amount, 10), zero);
  if (quantity > menu_limit) {
    throw new InputError(invalid_order_error_message);
  }
};

/**
 * 주문 수량이 0이 포함되어 있는지 검사함.
 * 
 * @param {string[]} quantities - 주문한 수량 배열
 * @throws {InputError} - 주문 수량에 0이 포함된 경우 발생하는 예외
 */
const validateZeroInclude = (quantities) => {
  if (quantities.includes(`${zero}`)) {
    throw new InputError(invalid_order_error_message);
  }
};

/**
 * 수량이 숫자로만 이루어져 있는지 검사함.
 * 
 * @param {string[]} quantities - 주문한 수량 배열
 * @throws {InputError} - 수량이 숫자로만 구성되어 있지 않은 경우 발생하는 예외
 */
const validateNumbers = (quantities) => {
  if (!quantities.every((value) => value.trim() !== blank && Number.isInteger(Number(value)))) {
    throw new InputError(invalid_order_error_message);
  }
};

export default foodIsValid;
