import { DESSERT_MENU, MAIN_MENU } from "../constants/menu.js";
import { DAY, DISCOUNT, NUMBERS } from "../constants/numbers.js";
import benefit from "./benefit.js";

const { discount_price, special_discount, basis, day_discount, day_basis } =
  DISCOUNT;
const { christmas, sunday } = DAY;
const { year, month, zero, discount_start } = NUMBERS;
/**
 * 크리스마스 디데이 할인: -1,200원
평일 할인: -4,046원
특별 할인: -1,000원
증정 이벤트: -25,000원
 */
class Discount {
  discountPrice(menu, date, totalPrice) {
    const day = this.#getDayOfWeek(date);
    const christmas = this.#ChristmasDday(date);
    const week =
      day <= 5 ? this.#week(menu, DESSERT_MENU) : this.#week(menu, MAIN_MENU);
    const special = this.#special(day, date);
    const discounts = this.#eachDiscount(
      christmas,
      week,
      special,
      totalPrice,
      day
    );
    return discounts;
  }

  #getDayOfWeek(date) {
    const day = new Date(year, month, date);
    return day.getDay();
  }
  #ChristmasDday(date) {
    if (date <= christmas) {
      return -((date - day_basis) * day_discount + basis);
    }
    return zero;
  }
  #week(menu, targetMenu) {
    const piece = menu.filter((food) => targetMenu.includes(food)).length;
    return -(piece * discount_price);
  }
  #special(day, date) {
    if (day === sunday || date === christmas) {
      return special_discount;
    }
    return zero;
  }
  #eachDiscount(christmas, week, special, totalPrice, day) {
    if (totalPrice >= discount_start) {
      return benefit(christmas, week, special, totalPrice, day);
    }
  }
}
export default Discount;
