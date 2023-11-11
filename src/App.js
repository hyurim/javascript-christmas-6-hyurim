import ChristmasController from "./controller/ChristmasController.js";

class App {
  constructor() {
    this.christmasController = new ChristmasController();
  }
  async run() {
    const date = await this.christmasController.dateInput();
    const food = await this.christmasController.foodInput();
    this.christmasController.handleChristmasLogic(date, food);
  }
}

export default App;
