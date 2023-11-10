import { Console } from "@woowacourse/mission-utils";
import { PROMPT } from "./constants/prompt.js";
import messageFormat from "./constants/messageFormat.js";

const {
  start,
  order_menu,
  pre_discount_total,
  free_menu,
  benefit_detail,
  total_benefit_detail,
  discounted_amount,
  event_badge,
} = PROMPT;

const {
  preview,
  menu,
  preDiscount,
  free,
  benefit,
  totalBenefit,
  discountedAmount,
  badge,
} = messageFormat;

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

  benefit(discount) {
    this.print(benefit_detail);
    this.print(benefit(discount));
  },

  totalBenefit(totalDiscount) {
    this.print(total_benefit_detail);
    this.print(totalBenefit(totalDiscount));
  },
  discountedAmount(totalPrice, totalDiscount) {
    this.print(discounted_amount);
    this.print(discountedAmount(totalPrice, totalDiscount));
  },
  badge(totalDiscount) {
    this.print(event_badge);
    this.print(badge(totalDiscount));
  },
};

export default OutputView;
