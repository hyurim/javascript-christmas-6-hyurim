import { Console } from "@woowacourse/mission-utils";
import dateIsValid from "./utils/dateIsValid.js";
import foodIsValid from "./utils/foodIsValid.js";

class InputView {
  async #dateInput() {
    return await Console.readLineAsync(
      "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)"
    );
  }
  async date() {
    let valid, date;
    do {
      date = await this.#dateInput();
      try {
        valid = dateIsValid(date);
      } catch (error) {
        Console.print(error.message);
        valid = false;
      }
    } while (!valid);
  }
  async food() {
    let valid, food;
    do{
      food = await this.#foodInput();
      try {
        valid = foodIsValid(food);
      } catch (error){
        Console.print(error.message);
        valid = false;
      }
    } while (!valid);
  }
  async #foodInput() {
    return await Console.readLineAsync(
      "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)"
    );
  }
}
export default InputView;
