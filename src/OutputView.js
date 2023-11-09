import { Console } from "@woowacourse/mission-utils";
import { PROMPT } from "./constants/prompt.js";
import messageFormat from "./constants/messageFormat.js";

const { order_menu, pre_discount_total, free_menu } = PROMPT;

class OutputView {
  #print(message){
    Console.print(message);
  }

  preView(date) {
    this.#print(messageFormat.preview(date));
  }

  menu(menuNames, quantities) {
    this.#print(order_menu);
    this.#print(messageFormat.menu(menuNames, quantities));
  }

  preDiscount(totalPrice){
    this.#print(pre_discount_total);
    this.#print(messageFormat.preDiscount(totalPrice));
  }

  free(totalPrice){
    this.#print(free_menu);
    this.#print(messageFormat.free(totalPrice));
  }
  // ...
}

export default OutputView;
