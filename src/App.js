import ChristmasController from "./controller/ChristmasController.js";

/**
 * 애플리케이션의 메인 클래스
 * @class
 */
class App {
  constructor() {
    /**
     * ChristmasController 인스턴스
     * @type {ChristmasController}
     */
    this.christmasController = new ChristmasController();
  }
  /**
   * 앱 실행
   * @async
   * @function
   * @returns {Promise<void>} - 애플리케이션 실행 결과
   */
  async run() {
    /**
     * 날짜 입력 결과
     * @type {string}
     */
    const date = await this.christmasController.dateInput();
    /**
     * 음식 입력 결과
     * @type {string}
     */
    const food = await this.christmasController.foodInput();
    this.christmasController.handleChristmasLogic(date, food);
  }
}

export default App;
