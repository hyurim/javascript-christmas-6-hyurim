import { Console } from "@woowacourse/mission-utils";
import { PROMPT, SYMBOLS } from "./constants/prompt.js";

const { order_menu } = PROMPT;
const { piece } = SYMBOLS;

class OutputView {
  printMenu(menu) {
    const { menuNames, quantities } = menu;
    Console.print(order_menu);
    menuNames.forEach((name, index) => {
      Console.print(`${name} ${quantities[index]}${piece}`);
    });
  }
  preDiscountPrint(){
    
  }
  // ...
}

export default OutputView;
