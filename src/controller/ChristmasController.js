import { Console } from "console";
import InputView from "../InputView.js";
import dateIsValid from "../utils/dateIsValid.js";
import foodIsValid from "../utils/foodIsValid.js";

class ChristmasController {
  #inputView = new InputView();
  async dateInput() {
    return this.#handleDateInput();
  }
  async #handleDateInput() {
    let date;
    try {
      date = await this.#inputView.date();
      dateIsValid(date);
    } catch (error) {
      Console.print(error.message);
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
      Console.print(error.message);
      this.#handleFoodInput();
    }
    return food;
  }
}

export default ChristmasController;
