import { Console } from "@woowacourse/mission-utils";
import { PROMPT } from "./constants/prompt.js";
import messageFormat from "./constants/messageFormat.js";

const { start, order_menu, pre_discount_total, free_menu } = PROMPT;
const { preview, menu, preDiscount, free } = messageFormat;

const OutputView = {
  print(message) {
    Console.print(message);
  },

  start() {
    this.print(start);
  },

  preView(date) {
    this.print(preview(date));
  },

  menu(menuNames, quantities) {
    this.print(order_menu);
    this.print(menu(menuNames, quantities));
  },

  preDiscount(totalPrice) {
    this.print(pre_discount_total);
    this.print(preDiscount(totalPrice));
  },

  free(totalPrice) {
    this.print(free_menu);
    this.print(free(totalPrice));
  },
  // ...
};

export default OutputView;
