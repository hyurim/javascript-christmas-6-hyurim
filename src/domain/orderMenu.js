import { NUMBERS } from "../constants/numbers.js";
import { PROMPT } from "../constants/prompt.js";
import OutputView from "../OutputView.js";

const { zero } = NUMBERS;
const { order_menu } = PROMPT;

const orderMenu = (food) => {
  const menuNames = food.match(/[^\d,-]+/g);
  const quantities = food.match(/\d+/g);

  orderMenuOutput(menuNames, quantities);

  return { menuNames, quantities };
};

const orderMenuOutput = (menuNames, quantities) => {
  OutputView.print(order_menu);
  menuNames.map((name, index) => {
    const quantity = quantities ? quantities[index] : `${zero}`;
    OutputView.menu(name, quantity);
  });
};

export default orderMenu;
