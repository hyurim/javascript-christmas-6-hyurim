import OutputView from "../OutputView.js";

const orderMenu = (food) => {
  const menuNames = food.match(/[^\d,-]+/g);
  const quantities = food.match(/\d+/g);

  OutputView.menu(menuNames, quantities);

  return { menuNames, quantities };
};

export default orderMenu;
