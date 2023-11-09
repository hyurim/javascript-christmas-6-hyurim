import { Console } from "@woowacourse/mission-utils";
import { PROMPT } from "./constants/prompt.js";
import messageFormat from "./constants/messageFormat.js";

const { order_menu, pre_discount_total } = PROMPT;

class OutputView {
  #print(message){
    Console.print(message);
  }

  preView(date) {
    this.#print(messageFormat.preview(date));
  }

  printMenu(menuNames, quantities) {
    this.#print(order_menu);
    this.#print(messageFormat.menu(menuNames, quantities));
  }

  preDiscountPrint(totalPrice){
    this.#print(pre_discount_total);
    this.#print(messageFormat.preDiscount(totalPrice));
  }
  // ...
}

export default OutputView;
