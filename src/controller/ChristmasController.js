import { Console } from "console";
import InputView from "../InputView.js";
import dateIsValid from "../utils/dateIsValid.js";
import foodIsValid from "../utils/foodIsValid.js";
import orderMenu from "../domain/orderMenu.js";
import OutputView from "../OutputView.js";
import preDiscountAmount from "../domain/preDiscountAmount.js";

class ChristmasController {
  #inputView = new InputView();
  #outputView = new OutputView();

  #print(message){
    Console.print(message);
  }

  async dateInput() {
    return this.#handleDateInput();
  }
  async #handleDateInput() {
    let date;
    try {
      date = await this.#inputView.date();
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
      food = await this.#inputView.food();
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
  }
}

export default ChristmasController;
