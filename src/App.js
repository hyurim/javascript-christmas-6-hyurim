import ChristmasController from "./controller/ChristmasController.js";

/**
 * 애플리케이션의 메인 클래스
 * @class
 */
class App {
  constructor() {
    /**
     * 크리스마스 컨트롤러 인스턴스
     * @type {ChristmasController}
     */
    this.christmasController = new ChristmasController();
  }
  /**
   * 애플리케이션 실행 메서드
   * @async
   * @returns {Promise<void>} Promise 객체
   */
  async run() {
    /**
     * 입력받은 날짜
     * @type {string}
     */
    const date = await this.christmasController.dateInput();
    /**
     * 입력받은 음식과 개수
     * @type {string}
     */
    const food = await this.christmasController.foodInput();

    // 크리스마스 로직 처리
    this.christmasController.handleChristmasLogic(date, food);
  }
}

export default App;
