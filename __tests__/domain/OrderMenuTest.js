/**
 * @fileoverview orderMenu 기능에 대한 테스트 파일
 * @module OrderMenuTest
 */
import orderMenu from "../../src/domain/orderMenu.js";

/**
 * orderMenu 함수에 대한 테스트 수트
 */
describe("orderMenu 기능 테스트", () => {
  test("테스트 케이스 1: 음식 문자열 올바르게 파싱되어야 함.", () => {
    // given
    const food = "해산물파스타-2,레드와인-1,초코케이크-1";
    
    // when
    const result = orderMenu(food);

    // then
    const expectedResult = {
      menuNames: ["해산물파스타", "레드와인", "초코케이크"],
      quantities: ["2", "1", "1"],
    };
    expect(result).toEqual(expectedResult);
  });
  test("테스트 케이스 2: 다양한 음식을 처리할 수 있어야 함.", () => {
    // given
    const food = "타파스-3,바비큐립-2,크리스마스파스타-1,레드와인-1,아이스크림-1";

    // when
    const result = orderMenu(food);

    // then
    const expectedResult = {
      menuNames: ["타파스", "바비큐립", "크리스마스파스타", "레드와인", "아이스크림"],
      quantities: ["3", "2", "1", "1", "1"],
    };
    expect(result).toEqual(expectedResult);
  });
});