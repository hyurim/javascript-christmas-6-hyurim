import { MENU } from "../constants/menu.js";
import { NUMBERS } from "../constants/numbers.js";

const { zero } = NUMBERS;

const preDiscountAmount = (menuNames, quantities) => {
  const orderedFoods = menuNames.map((menu, index) => {
    const menuItem = MENU.find((food) => food.menu === menu);
    const quantity =
      quantities && quantities[index] !== null
        ? parseInt(quantities[index], 10)
        : zero;
    const price = menuItem ? menuItem.price : zero;
    return {
      menu,
      quantity,
      price,
    };
  });

  const totalAmount = orderedFoods.reduce((total, food) => {
    return total + food.price * food.quantity;
  }, zero);
  return totalAmount;
};

export default preDiscountAmount;
