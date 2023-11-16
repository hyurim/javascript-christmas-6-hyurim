import { Console } from "@woowacourse/mission-utils";
import { PROMPT } from "./constants/prompt.js";
import messageFormat from "./constants/messageFormat.js";

const { start, pre_discount_total, free_menu, total_benefit_detail, discounted_amount, event_badge, } = PROMPT;

const { preview, menu, preDiscount, free, benefit, totalBenefit, discountedAmount, badge, } = messageFormat;

const OutputView = {
  /**
   * 콘솔에 메시지 출력.
   * @param {string} message - 출력할 메시지
   */
  print(message) {
    Console.print(message);
  },

  /**
   * 시작 메시지 출력.
   */
  start() {
    this.print(start);
  },

  /**
   * 에러 메시지를 출력.
   * @param {string} message - 출력할 에러 메시지
   */
  errorPrint(message) {
    this.print(message);
  },

  /**
   * 날짜 미리보기를 출력.
   * @param {string} date - 날짜 정보
   */
  preView(date) {
    this.print(preview(date));
  },

  /**
   * 주문한 메뉴를 출력.
   * @param {string[]} menuNames - 주문한 메뉴 이름 배열
   * @param {string[]} quantities - 주문한 수량 배열
   */
  menu(menuNames, quantities) {
    this.print(menu(menuNames, quantities));
  },

  /**
   * 할인 전 총 금액 출력.
   * @param {number} totalPrice - 할인 전 총 금액
   */
  preDiscount(totalPrice) {
    this.print(pre_discount_total);
    this.print(preDiscount(totalPrice));
  },

  /**
   * 무료 메뉴 정보 출력
   * @param {number} totalPrice - 할인 전 총 금액
   */
  free(totalPrice) {
    this.print(free_menu);
    this.print(free(totalPrice));
  },

  /**
   * 할인 혜택 정보 출력
   * @param {Object} discount - 할인 정보 객체
   */
  benefit(discount) {
    this.print(benefit(discount));
  },

  /**
   * 총 할인 혜택 정보 출력
   * @param {number} totalDiscount - 총 할인 금액
   */
  totalBenefit(totalDiscount) {
    this.print(total_benefit_detail);
    this.print(totalBenefit(totalDiscount));
  },

  /**
   * 할인된 최종 금액 출력
   * @param {number} totalPrice - 할인 전 총 금액
   * @param {number} totalDiscount - 총 할인 금액
   */
  discountedAmount(totalPrice, totalDiscount) {
    this.print(discounted_amount);
    this.print(discountedAmount(totalPrice, totalDiscount));
  },

  /**
   * 이벤트 뱃지 정보 출력
   * @param {number} selectedBadge - 총 할인 금액
   */
  badge(selectedBadge) {
    this.print(event_badge);
    this.print(badge(selectedBadge));
  },
};

export default OutputView;
