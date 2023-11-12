import { DESSERT_MENU, MAIN_MENU } from "../constants/menu.js";
import { DAY, DISCOUNT, NUMBERS } from "../constants/numbers.js";
import OutputView from "../OutputView.js";
import benefit from "./benefit.js";

const { discount_price, special_discount, basis, day_discount, day_basis } =
  DISCOUNT;
const { christmas, sunday } = DAY;
const { year, month, zero, discount_start } = NUMBERS;

class Discount {
  discountPrice(menu, date, totalPrice) {
    const day = this.#getDayOfWeek(date);
    const christmas = this.#ChristmasDday(date);
    const week = day <= 5 ? this.#week(menu, DESSERT_MENU) : this.#week(menu, MAIN_MENU);
    const special = this.#special(day, date);
    const discounts = this.#eachDiscount(christmas, week, special, totalPrice, day);
    const finalDiscount = discounts !== undefined ? discounts : [];

    OutputView.benefit(finalDiscount);

    return finalDiscount;
  }

  #getDayOfWeek(date) {
    const day = new Date(year, month, date);
    return day.getDay();
  }
  #ChristmasDday(date) {
    if (date <= christmas) {
      return (date - day_basis) * day_discount + basis;
    }
    return zero;
  }
  #week(menu, targetMenu) {
    const piece = menu.menuNames.reduce((acc, food, index) => {
      if (targetMenu.includes(food)) {
        acc += parseInt(menu.quantities[index], 10);
      }
      return acc;
    }, 0);
    return piece * discount_price;
  }
  #special(day, date) {
    if (day === sunday || Number(date) === christmas) {
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
