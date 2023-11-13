import InputView from "../InputView.js";
import dateIsValid from "../utils/dateIsValid.js";
import foodIsValid from "../utils/foodIsValid.js";
import orderMenu from "../domain/orderMenu.js";
import OutputView from "../OutputView.js";
import preDiscountAmount from "../domain/preDiscountAmount.js";
import Discount from "../domain/Discount.js";
import totalDiscount from "../domain/totalDiscount.js";
import badge from "../domain/badge.js";

/**
 * 크리스마스 할인 이벤트 로직 제어하는 컨트롤러 클래스
 * @class
 */
class ChristmasController {
  /**
   * 할인 객체
   * @type {Discount}
   * @private
   */
  #discount = new Discount();

  /**
   * ChristmasController 인스턴스 생성
   * @constructor
   */
  constructor() {
    /**
     * 애플리케이션 시작 메시지 출력
     */
    OutputView.start();
  }

  /**
   * 사용자로부터 날짜를 입력 받는 메서드
   * @async
   * @returns {Promise<string>} 입력받은 날짜
   */
  async dateInput() {
    return this.#handleDateInput();
  }

  /**
   * 날짜 입력 처리를 담당하는 메서드
   * @async
   * @private
   * @returns {Promise<string>} 입력받은 날짜
   * @throws {InputError} 입력이 유효하지 않은 경우 발생하는 예외
   */
  async #handleDateInput() {
    try {
      const date = await InputView.date();
      dateIsValid(date);
      return date;
    } catch (error) {
      OutputView.errorPrint(error.message);
      return this.#handleDateInput();
    }
  }

  /**
   * 사용자로부터 음식을 입력받는 메서드
   * @async
   * @returns {Promise<string>} 입력받은 음식
   */
  async foodInput() {
    return this.#handleFoodInput();
  }

  /**
   * 음식 입력 처리를 담당하는 메서드
   * @async
   * @private
   * @returns {Promise<string>} 입력받은 음식
   * @throws {InputError} 입력이 유효하지 않은 경우 발생하는 예외
   */
  async #handleFoodInput() {
    try {
      const food = await InputView.food();
      foodIsValid(food);
      return food;
    } catch (error) {
      OutputView.errorPrint(error.message);
      return this.#handleFoodInput();
    }
  }

  /**
   * 크리스마스 이벤트 로직을 처리하는 메서드
   * @param {string} date - 날짜
   * @param {string} food - 음식 주문
   */
  handleChristmasLogic(date, food) {
    OutputView.preView(date);
    const menu = orderMenu(food);
    const totalPrice = preDiscountAmount(menu.menuNames, menu.quantities);
    const discount = this.#discount.discountPrice(menu, date, totalPrice);
    const totalDiscountPrice = totalDiscount(totalPrice, discount);
    badge(totalDiscountPrice);
  }
}

export default ChristmasController;
