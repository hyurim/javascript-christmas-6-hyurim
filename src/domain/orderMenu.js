import { NUMBERS } from "../constants/numbers.js";
import { PROMPT } from "../constants/prompt.js";
import OutputView from "../OutputView.js";

const { zero } = NUMBERS;
const { order_menu } = PROMPT;

/**
 * 입력받은 음식 정보를 가공하여 주문 목록을 반환함.
 * 
 * @param {string} food - 음식 정보 문자열
 * @returns {{ menuNames: Array<string>, quantities: Array<number> }} - 추출된 음식 이름과 수량
 * @property {Array} menuNames - 음식 목록
 * @property {Array} quantities - 수량 목록
 */
const orderMenu = (food) => {
  const menuNames = food.match(/[^\d,-]+/g);
  const quantities = food.match(/\d+/g);

  orderMenuOutput(menuNames, quantities);
  return { menuNames, quantities };
};

/**
 * 주문 목록을 출력합니다.
 * 
 * @param {Array} menuNames - 음식 목록
 * @param {Array} quantities - 수량 목록
 * @returns {void}
 */
const orderMenuOutput = (menuNames, quantities) => {
  OutputView.print(order_menu);
  menuNames.map((name, index) => {
    const quantity = quantities[index];
    OutputView.menu(name, quantity);
  });
};

export default orderMenu;
