import { MENU } from "../constants/menu.js";
import { NUMBERS } from "../constants/numbers.js";
import OutputView from "../OutputView.js";

const { zero } = NUMBERS;

/**
 * 주문된 음식의 가격과 수량을 기반으로 할인 전 총 주문 가격을 계산함.
 * 
 * @param {Array} menuNames - 주문된 음식 목록
 * @param {Array} quantities - 주문된 음식 수량
 * @returns {number} - 할인 전 총 주문 가격
 */
const preDiscountAmount = (menuNames, quantities) => {
  const orderedFoods = menuNames.map((menu, index) => {
    const menuItem = MENU.find((food) => food.menu === menu) || { price: zero };
    const quantity = parseInt(quantities?.[index], 10) || zero;
    const price = menuItem.price;
    return { menu, quantity, price };
  });

  const totalAmount = orderedFoods.reduce((total, food) => {
    return total + food.price * food.quantity;
  }, zero);

  preDiscountAmountOutput(totalAmount);

  return totalAmount;
};

/**
 * 할인 전 총 주문 가격을 출력함.
 * 
 * @param {number} totalAmount - 할인 전 총 주문 가격
 */
const preDiscountAmountOutput = (totalAmount) => {
  OutputView.preDiscount(totalAmount);
  OutputView.free(totalAmount);
}

export default preDiscountAmount;