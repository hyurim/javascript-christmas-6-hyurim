import { MENU } from "../constants/menu.js";

const preDiscountAmount = (menuNames, quantities) => {
  const orderedFoods = menuNames.map((menu, index) => {
    const menuItem = MENU.find((food) => food.menu === menu);
    const quantity =
      quantities && quantities[index] !== null
        ? parseInt(quantities[index], 10)
        : 0;
    const price = menuItem ? menuItem.price : 0;
    return {
      menu,
      quantity,
      price,
    };
  });

  const totalAmount = orderedFoods.reduce((total, food) => {
    return total + food.price * food.quantity;
  }, 0);
  return totalAmount;
};

export default preDiscountAmount;
