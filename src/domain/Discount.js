import { DESSERT_MENU, MAIN_MENU } from "../constants/menu.js";
import { DAY, DISCOUNT, NUMBERS } from "../constants/numbers.js";
import { PROMPT } from "../constants/prompt.js";
import OutputView from "../OutputView.js";
import benefit from "./benefit.js";

const { discount_price, special_discount, basis, day_discount, day_basis } = DISCOUNT;
const { christmas, sunday } = DAY;
const { year, month, zero, discount_start } = NUMBERS;
const { benefit_detail } = PROMPT;

/**
 * 할인에 관련된 계산을 담당하는 Discount 클래스
 */
class Discount {
  /**
   * 메뉴, 날짜, 총 가격을 받아 할인을 계산하고 결과를 출력하고 반환함.
   *
   * @param {Object} menu - 주문한 음식에 대한 정보를 담고 있는 객체
   * @param {string} date - 입력한 날짜
   * @param {number} totalPrice - 총 주문 가격
   * @returns {Array} - 계산된 할인 혜택 목록
   */
  discountPrice(menu, date, totalPrice) {
    const day = this.#getDayOfWeek(date);
    const christmas = this.#ChristmasDday(date);
    const week =
      day <= 5 ? this.#week(menu, DESSERT_MENU) : this.#week(menu, MAIN_MENU);
    const special = this.#special(day, date);
    const discounts = this.#eachDiscount(christmas, week, special, totalPrice, day);
    const finalDiscount = discounts !== undefined ? discounts : [];

    this.#discountOutput(finalDiscount);

    return finalDiscount;
  }

  /**
   * 날짜에 따른 요일 반환
   *
   * @private
   * @param {string} date - 입력한 날짜
   * @returns {number} - 0부터 6까지 일, 월, 화, 수, 목, 금, 토
   */
  #getDayOfWeek(date) {
    const day = new Date(year, month, date);
    return day.getDay();
  }

  /**
   * 크리스마스 디데이 할인 금액을 계산하여 반환함.
   *
   * @private
   * @param {string} date - 입력한 날짜
   * @returns {number} - 크리스마스 디데이 할인 금액
   */
  #ChristmasDday(date) {
    if (date <= christmas) {
      return (date - day_basis) * day_discount + basis;
    }
    return zero;
  }

  /**
   * 특정 메뉴에 대한 할인 금액을 계산하여 반환.
   *
   * @param {Object} menu - 주문한 음식에 대한 정보를 담고 있는 객체
   * @param {Array} targetMenu - 할인 대상 메뉴
   * @returns {number} - 할인 금액
   */
  #week(menu, targetMenu) {
    const piece = menu.menuNames.reduce((acc, food, index) => {
      if (targetMenu.includes(food)) {
        acc += Number(menu.quantities[index]);
      }
      return acc;
    }, 0);
    return piece * discount_price;
  }

  /**
   * 일요일 또는 크리스마스에 추가적인 할인을 반환함.
   *
   * @param {number} day - 요일
   * @param {string} date - 입력한 날짜
   * @returns {number} - 추가적인 할인 금액
   */
  #special(day, date) {
    return day === sunday || Number(date) === christmas
    ? special_discount : zero;
  }

  /**
   * 각 할인 혜택을 계산하여 반환함.
   *
   * @param {number} christmas - 크리스마스 디데이 할인 금액
   * @param {number} week - 주중 또는 주말 할인 금액
   * @param {number} special - 특별 할인 금액
   * @param {number} totalPrice - 총 주문 가격
   * @param {number} day - 입력한 날짜의 요일
   * @returns {Array} - 계산된 할인 혜택 목록
   */
  #eachDiscount(christmas, week, special, totalPrice, day) {
    if (totalPrice >= discount_start) {
      return benefit(christmas, week, special, totalPrice, day);
    }
  }

  /**
   * 최종 할인 혜택 출력
   *
   * @param {Array} finalDiscount - 최종 할인 혜택 목록
   * @returns {void}
   */
  #discountOutput(finalDiscount) {
    OutputView.print(benefit_detail);
    finalDiscount.length !== zero
      ? finalDiscount.map((item) => OutputView.benefit(item)) : OutputView.benefit(zero);
  }
}
export default Discount;
