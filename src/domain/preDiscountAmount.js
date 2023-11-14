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
  const orderedFoodList = orderedFoods(menuNames, quantities);

  const totalAmount = orderedFoodList.reduce((total, food) => {
    return total + food.price * food.quantity;
  }, zero);

  preDiscountAmountOutput(totalAmount);

  return totalAmount;
};

/**
 * 주문한 메뉴 이름과 수량을 바탕으로 주문된 음식 목록을 생성함.
 * 
 * @param {Array} menuNames - 주문된 음식 목록
 * @param {Array} quantities - 주문된 음식 수량
 * @returns {Array<{ menu: string, quantity: number, price: number }>} - 주문된 음식 목록
 */
const orderedFoods = (menuNames, quantities) => {
  return menuNames.map((menu, index) => {
    const menuItem = MENU.find((food) => food.menu === menu) || { price: zero };
    const quantity = parseInt(quantities?.[index], 10) || zero;
    const price = menuItem.price;
    return { menu, quantity, price };
  });
};
/**
 * 할인 전 총 주문 가격을 출력함.
 * 
 * @param {number} totalAmount - 할인 전 총 주문 가격
 * @returns {void}
 */
const preDiscountAmountOutput = (totalAmount) => {
  OutputView.preDiscount(totalAmount);
  OutputView.free(totalAmount);
}

export default preDiscountAmount;