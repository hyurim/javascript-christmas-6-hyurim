import ChristmasController from "./controller/ChristmasController.js";

class App {
  constructor() {
    this.christmasController = new ChristmasController();
  }
  async run() {
    const date = await this.christmasController.dateInput();
    const food = await this.christmasController.foodInput();
  }
}

export default App;
