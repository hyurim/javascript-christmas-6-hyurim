import InputView from "../InputView.js";

class Christmas {
  constructor() {
    this.inputView = new InputView();
  }
  async input(){
    const date = await this.inputView.readDate();
  }
}

export default Christmas;
