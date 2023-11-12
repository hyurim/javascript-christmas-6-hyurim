import { MENU } from "../constants/menu.js";
import { NUMBERS } from "../constants/numbers.js";
import OutputView from "../OutputView.js";

const { zero } = NUMBERS;

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

const preDiscountAmountOutput = (totalAmount) => {
  OutputView.preDiscount(totalAmount);
  OutputView.free(totalAmount);
}

export default preDiscountAmount;