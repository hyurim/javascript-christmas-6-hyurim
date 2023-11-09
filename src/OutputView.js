import { Console } from "@woowacourse/mission-utils";
import { PROMPT, SYMBOLS } from "./constants/prompt.js";
import messageFormat from "./constants/messageFormat.js";

const { order_menu } = PROMPT;

class OutputView {
  #print(message){
    Console.print(message);
  }

  preView(date) {
    this.#print(messageFormat.preview(date));
  }

  printMenu(menu) {
    this.#print(order_menu);
    this.#print(messageFormat.menu(menu));
  }

  preDiscountPrint(){

  }
  // ...
}

export default OutputView;
