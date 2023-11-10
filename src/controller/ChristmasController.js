import { Console } from "console";
import InputView from "../InputView.js";
import dateIsValid from "../utils/dateIsValid.js";
import foodIsValid from "../utils/foodIsValid.js";
import orderMenu from "../domain/orderMenu.js";
import OutputView from "../OutputView.js";
import preDiscountAmount from "../domain/preDiscountAmount.js";
import Discount from "../domain/Discount.js";
import benefit from "../domain/benefit.js";

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
    let date;
    try {
      date = await InputView.date();
      dateIsValid(date);
    } catch (error) {
      this.#print(error.message);
      this.#handleDateInput();
    }
    return date;
  }

  async foodInput() {
    return this.#handleFoodInput();
  }
  async #handleFoodInput() {
    let food;
    try {
      food = await InputView.food();
      foodIsValid(food);
    } catch (error) {
      this.#print(error.message);
      this.#handleFoodInput();
    }
    return food;
  }

  handleChristmasResult(date, food) {
    const { menuNames, quantities } = orderMenu(food);
    const totalPrice = preDiscountAmount(menuNames, quantities);
    const discount = this.#discount.discountPrice(menuNames, date, totalPrice);
    OutputView.preView(date);
    OutputView.menu(menuNames, quantities);
    OutputView.preDiscount(totalPrice);
    OutputView.free(totalPrice);
    OutputView.benefit(discount);
  }
}

export default ChristmasController;
