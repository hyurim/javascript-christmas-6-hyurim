/**
 * @fileoverview Discount 기능에 대한 테스트 파일
 * @module DiscountTest
 */
import Discount from "../../src/domain/Discount.js";
import orderMenu from "../../src/domain/orderMenu.js";
import preDiscountAmount from "../../src/domain/preDiscountAmount";

/**
 * 주어진 음식에 대한 메뉴와 총 가격을 반환하는 함수
 * @param {string} food - 주문할 음식의 목록
 * @returns {{menu: Object, totalPrice: number}} 주문한 음식의 메뉴와 총 가격
 */
const getMenuAndTotalPrice = (food) => {
  const menu = orderMenu(food);
  const totalPrice = preDiscountAmount(menu.menuNames, menu.quantities);

  return { menu, totalPrice };
};

/**
 * Discount 기능에 대한 테스트 수트
 */
describe("Discount 기능 테스트", () => {
  let discount;
  /**
   * 모든 테스트 케이스 실행 전에 Discount 객체를 초기화하는 함수
   */
  beforeAll(() => {
    discount = new Discount();
  });

  /**
   * 여러 테스트 케이스에 대한 테스트를 수행하는 함수
   * @param {string} description - 테스트 케이스에 대한 설명
   * @param {string} date - 할인을 받을 날짜
   * @param {string} food - 주문한 음식의 목록
   * @param {Array} expected - 예상되는 할인 목록
   */
  test.each([
    [
      "크리스마스일 때 평일 할인(디저트 1개)), 특별 할인",
      "25",
      "해산물파스타-2,레드와인-1,초코케이크-1",
      [
        { type: "크리스마스 디데이 할인: ", amount: -3400 },
        { type: "평일 할인: ", amount: -2023 },
        { type: "특별 할인: ", amount: -1000 },
        { type: "증정 이벤트: ", amount: -25000 },
      ],
    ],
    [
      "토요일일 때 주말 할인(메인 2개)",
      "16",
      "타파스-1,바비큐립-1,크리스마스파스타-1,아이스크림-2,제로콜라-1,샴페인-1",
      [
        { type: "크리스마스 디데이 할인: ", amount: -2500 },
        { type: "주말 할인: ", amount: -4046 },
        { type: "증정 이벤트: ", amount: -25000 },
      ],
    ],
    [
      "크리스마스 이후 평일 할인(디저트 3개)",
      "28",
      "시저샐러드-1,티본스테이크-1,해산물파스타-1,초코케이크-1,아이스크림-2,제로콜라-1,레드와인-1",
      [
        { type: "평일 할인: ", amount: -6069 },
        { type: "증정 이벤트: ", amount: -25000 },
      ],
    ],
    [
      "크리스마스 이후 주말 할인(메인 5개)",
      "30",
      "양송이수프-1,시저샐러드-4,타파스-1,티본스테이크-2,바비큐립-1,해산물파스타-1,크리스마스파스타-1,아이스크림-4,초코케이크-1,제로콜라-1,레드와인-1,샴페인-1",
      [
        { type: "주말 할인: ", amount: -10115 },
        { type: "증정 이벤트: ", amount: -25000 },
      ],
    ],
    [
      "크리스마스 이후 평일 할인(디저트 4개)와 특별 할인",
      "31",
      "양송이수프-1,시저샐러드-1,타파스-1,티본스테이크-2,크리스마스파스타-1,아이스크림-2,초코케이크-2,제로콜라-1,레드와인-1",
      [
        { type: "평일 할인: ", amount: -8092 },
        { type: "특별 할인: ", amount: -1000 },
        { type: "증정 이벤트: ", amount: -25000 },
      ],
    ],
    [
      "1만원 이하 금액이라 할인 혜택이 적용되지 않음",
      "16",
      "양송이수프-1,제로콜라-1",
      [],
    ],
    [
      "1만원 이상 12만원 이하 금액이라 샴페인 증정이 되지 않음",
      "24",
      "타파스-1,티본스테이크-1,해산물파스타-1,아이스크림-2,제로콜라-2",
      [
        { type: "크리스마스 디데이 할인: ", amount: -3300 },
        { type: "평일 할인: ", amount: -4046 },
        { type: "특별 할인: ", amount: -1000 },
      ],
    ],
  ])("테스트 케이스 %#: %s", (_, date, food, expected) => {
    const { menu, totalPrice } = getMenuAndTotalPrice(food);
    const result = discount.discountPrice(menu, date, totalPrice);
    expect(result).toEqual(expected);
  });
});
