import { DESSERT_MENU, MAIN_MENU } from "../constants/menu.js";
import { DAY, DISCOUNT } from "../constants/numbers.js";

const { discount_price, special_discount, basis, day_discount, day_basis } =
  DISCOUNT;
const { dayOfWeek, week, christmas, sunday } = DAY;
/**
 * 크리스마스 디데이 할인: -1,200원
평일 할인: -4,046원
특별 할인: -1,000원
증정 이벤트: -25,000원
 */
class Discount {
  discountPrice(menu, date) {
    const day = this.#getDayOfWeek(date);
    const christmas = this.#ChristmasDay(date);
    const special = this.#specialDiscount(day, date);
    const week =
      day <= 5 ? this.#week(menu, DESSERT_MENU) : this.#week(menu, MAIN_MENU);
    return { christmas, special, week };
  }

  #getDayOfWeek(date) {
    const day = (date + dayOfWeek) % week;
    return day;
  }
  #ChristmasDay(date) {
    return -((date - day_basis) * day_discount + basis);
  }
  #week(menu, targetMenu) {
    const piece = this.#countMatchingMenu(menu, targetMenu);
    return -(piece * discount_price);
  }
  #countMatchingMenu(menu, targetMenu) {
    return menu.filter((food) => targetMenu.includes(food)).length;
  }
  #specialDiscount(day, date) {
    if (day === sunday || date === christmas) {
      return special_discount;
    }
  }
}
export default Discount;
