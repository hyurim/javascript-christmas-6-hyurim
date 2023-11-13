import { Console } from "@woowacourse/mission-utils";
import { PROMPT } from "./constants/prompt.js";

const { select_date, select_menu } = PROMPT;

/**
 * 사용자로부터 입력을 받는 객체
 */
const InputView = {
  /**
   * 사용자로부터 날짜 입력을 받는 메서드
   * @async
   * @returns {Promise<string>} // 입력받은 날짜
   */
  async date() {
    return await Console.readLineAsync(select_date);
  },

  /**
   * 사용자로부터 음식 주문을 받는 메서드
   * @async
   * @returns {Promise<string>} 입력받은 음식 주문
   */
  async food() {
    return await Console.readLineAsync(select_menu);
  },
};

export default InputView;
