import MENU from "../constants/menu.js";

const preDiscountAmount = (menuNames, quantities) => {
  const orderedFoods = menuNames.map((menu, index) => {
    const menuItem = MENU.find((food) => food.menu === menu);
    return {
      menu,
      quantity: parseInt(quantities[index], 10),
      price: menuItem.price,
    };
  });

  const totalAmount = orderedFoods.reduce((total, food) => {
    return total + food.price * food.quantity;
  }, 0);

  return totalAmount.toLocaleString();
};

export default preDiscountAmount;