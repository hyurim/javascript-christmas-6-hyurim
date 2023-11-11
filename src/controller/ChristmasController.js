import { Console } from "@woowacourse/mission-utils";
import InputView from "../InputView.js";
import dateIsValid from "../utils/dateIsValid.js";
import foodIsValid from "../utils/foodIsValid.js";
import orderMenu from "../domain/orderMenu.js";
import OutputView from "../OutputView.js";
import preDiscountAmount from "../domain/preDiscountAmount.js";
import Discount from "../domain/Discount.js";
import totalDiscount from "../domain/totalDiscount.js";

class ChristmasController {
  #discount = new Discount();

  constructor() {
    OutputView.start();
  }

  #print(message) {
    Console.print(message);
  }

  async dateInput() {
    return this.#handleDateInput();
  }
  async #handleDateInput() {
    try {
      const date = await InputView.date();
      dateIsValid(date);
      return date;
    } catch (error) {
      this.#print(error.message);
      return this.#handleDateInput();
    }
  }

  async foodInput() {
    return this.#handleFoodInput();
  }
  async #handleFoodInput() {
    try {
      const food = await InputView.food();
      foodIsValid(food);
      return food;
    } catch (error) {
      this.#print(error.message);
      return this.#handleFoodInput();
    }
  }

  handleChristmasLogic(date, food) {
    const menu = orderMenu(food);
    const totalPrice = preDiscountAmount(menu.menuNames, menu.quantities);
    const discount = this.#discount.discountPrice(menu, date, totalPrice);
    const totalDiscountPrice = totalDiscount(discount);
    this.#handleChristmasOutput(
      date,
      menu,
      totalPrice,
      discount,
      totalDiscountPrice
    );
  }
  #handleChristmasOutput(date, menu, totalPrice, discount, totalDiscountPrice) {
    OutputView.preView(date);
    OutputView.menu(menu.menuNames, menu.quantities);
    OutputView.preDiscount(totalPrice);
    OutputView.free(totalPrice);
    OutputView.benefit(discount);
    OutputView.totalBenefit(totalDiscountPrice);
    OutputView.discountedAmount(totalPrice, totalDiscountPrice);
    OutputView.badge(totalDiscountPrice);
  }
}

export default ChristmasController;
