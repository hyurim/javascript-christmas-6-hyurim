/**
 * @fileoverview 메뉴 입력 유효성 검사에 대한 테스트 파일
 * @module FoodValidationTest
 */
import ERROR from "../../src/constants/error";
import foodIsValid from "../../src/utils/foodIsValid";

const { prefix, invalid_order_error_message } = ERROR;

/**
 * 주어진 입력에 따른 에러 테스트 수행
 * 
 * @param {string} inputs - 테스트할 입력값(주문 내용)
 * @return {void}
 */
const expectInValidOrderError = (inputs) => {
  expect(() => foodIsValid(inputs)).toThrow(
    `${prefix} ${invalid_order_error_message}`
  );
};

/**
 * 메뉴 입력에 대한 테스트 수트
 */
describe("메뉴 입력 테스트", () => {
  test("정상적인 입력", () => {
    // given
    const inputs = "시저샐러드-1,티본스테이크-1,아이스크림-1,제로콜라-1";
    
    // when, then
    expect(() => foodIsValid(inputs)).not.toThrow();
  });
  test.each([
    ["버섯수프-1,샴페인-1"],
    ["알리오올리오-1,사이다-1,화이트와인-1"],
    ["시저샐러드-1,딸기케이크-1"],
  ])("메뉴판에 없는 메뉴를 입력한 경우", (inputs) => {
    
    // when, then
    expectInValidOrderError(inputs);
  });
  test.each([
    ["제로콜라 -1, 티본스테이크-1"],
    ["타파스-1 ,티본스테이크- 1 "],
    ["바비큐립 -3,티본스테이크-1"],
    ["티본스테이크-1, 초코케이크-3"],
  ])("공백을 입력한 경우", (inputs) => {
    
    // when, then
    expectInValidOrderError(inputs);
  });
  test.each([
    ["양송이수프-one,크리스마스파스타-two"],
    ["시저샐러드-a,티본스테이크-3"],
    ["타파스-1,바비큐립- "],
    ["초코케이크-six,해산물파스타-2"],
  ])("메뉴의 개수가 숫자가 아닌 경우", (inputs) => {
    
    // when, then
    expectInValidOrderError(inputs);
  });
  test.each([
    ["해산물파스타-2, 레드와인-1, 초코케이크-1"],
    ["해산물파스타 -2,레드와인 -1,초코케이크 -3"],
    ["해산물파스타-2, 레드와인-1,초코케이크 -3"],
  ])("메뉴 형식이 예시와 다른 경우", (inputs) => {
    
    // when, then
    expectInValidOrderError(inputs);
  });
  test.each([
    ["양송이수프-1,크리스마스파스타-2,초코케이크-1,양송이수프-1"],
    ["시저샐러스-1,바비큐립-1,바비큐립-2,레드와인-1,아이스크림-1"],
    ["타파스-2,티본스테이크-2,해산물파스타-1,제로콜라-3,티본스테이크-1"],
  ])("중복 메뉴를 입력한 경우", (inputs) => {
    
    // when, then
    expectInValidOrderError(inputs);
  });
  test.each([
    ["타파스-21"],
    [
      "시저샐러드-1,바비큐립-2,티본스테이크-3,샴페인-4,아이스크림-5,해산물파스타-6",
    ],
    ["제로콜라-10,해산물파스타-9,타파스-10"],
  ])("20개를 초과해서 주문한 경우", (inputs) => {
    
    // when, then
    expectInValidOrderError(inputs);
  });
  test.each([["제로콜라-3"], ["제로콜라-1,레드와인-3,샴페인-2"]])(
    "음료만 주문한 경우",
    (inputs) => {
      
    // when, then
    expectInValidOrderError(inputs);
    }
  );
  test.each([
    ["티본스테이크-1,바비큐립-1,초코케이크-0,제로콜라-1"],
    ["타파스-2,크리스마스파스타-0,레드와인-0"],
    ["타파스-0,제로콜라-0"],
    ["해산물파스타-0,레드와인-0,초코케이크-0"],
  ])("메뉴 입력은 제대로 되었으나 0이 입력된 경우", (inputs) => {
    
    // when, then
    expectInValidOrderError(inputs);
  });
});
