import { Console } from "@woowacourse/mission-utils";
import { PROMPT } from "./constants/prompt.js";

const { start, select_date, select_menu } = PROMPT;

class InputView {
  constructor() {
    Console.print(start);
  }
  async date() {
    return await Console.readLineAsync(select_date);
  }

  async food() {
    return await Console.readLineAsync(select_menu);
  }
}
export default InputView;
