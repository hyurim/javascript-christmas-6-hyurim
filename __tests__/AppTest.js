import App from "../src/App.js";
import { Console } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();

  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(received).toContain(log);
  });
};

describe("전체 기능 테스트", () => {
  test("정상 출력 테스트", async () => {
    //given
    const logSpy = getLogSpy();
    mockQuestions([
      "23",
      "양송이수프-1,시저샐러드-1,타파스-1,티본스테이크-2,크리스마스파스타-1,아이스크림-2,초코케이크-2,제로콜라-1,레드와인-1",
    ]);

    //when
    const app = new App();
    await app.run();

    //then
    const expected = [
      "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
      "12월 23일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
      "<주문 메뉴>",
      "양송이수프 1개",
      "시저샐러드 1개",
      "타파스 1개",
      "티본스테이크 2개",
      "크리스마스파스타 1개",
      "아이스크림 2개",
      "초코케이크 2개",
      "제로콜라 1개",
      "레드와인 1개",
      "<할인 전 총주문 금액>",
      "257,500원",
      "<증정 메뉴>",
      "샴페인 1개",
      "<혜택 내역>",
      "크리스마스 디데이 할인: -3,200원",
      "주말 할인: -6,069원",
      "증정 이벤트: -25,000원",
      "<총혜택 금액>",
      "-34,269원",
      "<할인 후 예상 결제 금액>",
      "248,231원",
      "<12월 이벤트 배지>",
      "산타",
    ];

    expectLogContains(getOutput(logSpy), expected);
  });
  test("12만원 이하의 금액을 입력한 경우", async () => {
    //given
    const logSpy = getLogSpy();
    mockQuestions(["24", "타파스-1,티본스테이크-1,해산물파스타-1,아이스크림-2,제로콜라-2"]);

    //when
    const app = new App();
    await app.run();

    //then
    const expected = [
      "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
      "12월 24일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
      "<주문 메뉴>",
      "타파스 1개",
      "티본스테이크 1개",
      "해산물파스타 1개",
      "아이스크림 2개",
      "제로콜라 2개",
      "<할인 전 총주문 금액>",
      "111,500원",
      "<증정 메뉴>",
      "없음",
      "<혜택 내역>",
      "크리스마스 디데이 할인: -3,300원",
      "평일 할인: -4,046원",
      "특별 할인: -1,000원",
      "<총혜택 금액>",
      "-8,346원",
      "<할인 후 예상 결제 금액>",
      "103,154원",
      "<12월 이벤트 배지>",
      "별",
    ];

    expectLogContains(getOutput(logSpy), expected);
  })
});
