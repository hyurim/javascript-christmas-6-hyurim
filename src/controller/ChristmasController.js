import { Console } from "console";
import InputView from "../InputView.js";
import dateIsValid from "../utils/dateIsValid.js";
import foodIsValid from "../utils/foodIsValid.js";
import orderMenu from "../domain/orderMenu.js";
import OutputView from "../OutputView.js";
import preDiscountAmount from "../domain/preDiscountAmount.js";
import Discount from "../domain/Discount.js";

class ChristmasController {
  #outputView = new OutputView();
  #discount = new Discount();

  #print(message){
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
    this.#outputView.preView(date);
    this.#outputView.menu(menuNames, quantities);
    this.#outputView.preDiscount(totalPrice);
    this.#outputView.free(totalPrice);
    this.#discount(menuNames, date);
  }
}

export default ChristmasController;
