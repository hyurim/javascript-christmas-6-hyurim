import Christmas from "./controller/Christmas.js";

class App {
  constructor() {
    this.christmas = new Christmas();
  }
  async run() {
    this.christmas.input()
  }
}

export default App;
