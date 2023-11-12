import Discount from "../../src/domain/Discount.js";
import orderMenu from "../../src/domain/orderMenu.js";
import preDiscountAmount from "../../src/domain/preDiscountAmount";

const insideLogic = (food) => {
  const menu = orderMenu(food);
  const totalPrice = preDiscountAmount(menu.menuNames, menu.quantities);

  return { menu, totalPrice };
};

describe("Discount 기능 테스트", () => {
  let discount;
  beforeAll(() => {
    discount = new Discount();
  });
  test("테스트 케이스 1: 크리스마스일 때 평일 할인(디저트 1개)), 특별 할인이 리턴 값으로 나와야 함.", () => {
    const date = "25";
    const food = "해산물파스타-2,레드와인-1,초코케이크-1";
    const { menu, totalPrice } = insideLogic(food);

    const result = discount.discountPrice(menu, date, totalPrice);

    expect(result).toEqual([
      { type: "크리스마스 디데이 할인: ", amount: -3400 },
      { type: "평일 할인: ", amount: -2023 },
      { type: "특별 할인: ", amount: -1000 },
      { type: "증정 이벤트: ", amount: -25000 },
    ]);
  });
  test("테스트 케이스 2: 토요일일 때 주말 할인(메인 2개)이 리턴 값으로 나와야 함.", () => {
    const date = "16";
    const food = "타파스-1,바비큐립-1,크리스마스파스타-1,아이스크림-2,제로콜라-1,샴페인-1";
    const { menu, totalPrice } = insideLogic(food);

    const result = discount.discountPrice(menu, date, totalPrice);

    expect(result).toEqual([
      { type: "크리스마스 디데이 할인: ", amount: -2500 },
      { type: "주말 할인: ", amount: -4046 },
      { type: "증정 이벤트: ", amount: -25000 },
    ]);
  });
  test("테스트 케이스 3: 크리스마스 이후 평일 할인(디저트 3개)이 리턴 값으로 나와야 함.", () => {
    const date = "28";
    const food = "시저샐러드-1,티본스테이크-1,해산물파스타-1,초코케이크-1,아이스크림-2,제로콜라-1,레드와인-1";
    const { menu, totalPrice } = insideLogic(food);

    const result = discount.discountPrice(menu, date, totalPrice);
    expect(result).toEqual([
      { type: "평일 할인: ", amount: -6069 },
      { type: "증정 이벤트: ", amount: -25000 },
    ]);
  });
  test("테스트 케이스 4: 크리스마스 이후 주말 할인(메인 5개)이 리턴 값으로 나와야 함.", () => {
    const date = "30";
    const food = "양송이수프-1,시저샐러드-4,타파스-1,티본스테이크-2,바비큐립-1,해산물파스타-1,크리스마스파스타-1,아이스크림-4,초코케이크-1,제로콜라-1,레드와인-1,샴페인-1";
    const { menu, totalPrice } = insideLogic(food);

    const result = discount.discountPrice(menu, date, totalPrice);
    expect(result).toEqual([
      { type: "주말 할인: ", amount: -10115 },
      { type: "증정 이벤트: ", amount: -25000 },
    ]);
  });
  test("테스트 케이스 5: 크리스마스 이후 평일 할인(디저트 4개)와 특별 할인이 리턴 값으로 나와야 함.", () => {
    const date = "31";
    const food = "양송이수프-1,시저샐러드-1,타파스-1,티본스테이크-2,크리스마스파스타-1,아이스크림-2,초코케이크-2,제로콜라-1,레드와인-1";
    const { menu, totalPrice } = insideLogic(food);

    const result = discount.discountPrice(menu, date, totalPrice);
    expect(result).toEqual([
      { type: "평일 할인: ", amount: -8092 },
      { type: "특별 할인: ", amount: -1000 },
      { type: "증정 이벤트: ", amount: -25000 },
    ]);
  });
  test("테스트 케이스 6: 1만원 이하 금액이라 할인 혜택이 적용되지 않아야 함.", () => {
    const date = "16";
    const food = "양송이수프-1,제로콜라-1";
    const { menu, totalPrice } = insideLogic(food);

    const result = discount.discountPrice(menu, date, totalPrice);
    expect(result).toEqual([]);
  });
  test("테스트 케이스 7: 1만원 이상 12만원 이하 금액이라 샴페인 증정이 되지 않아야 함.", () => {
    const date = "24";
    const food = "타파스-1,티본스테이크-1,해산물파스타-1,아이스크림-2,제로콜라-2"
    const { menu, totalPrice } = insideLogic(food);

    const result = discount.discountPrice(menu, date, totalPrice);
    expect(result).toEqual([
      { type: '크리스마스 디데이 할인: ', amount: -3300 },
      { type: '평일 할인: ', amount: -4046 },
      { type: '특별 할인: ', amount: -1000 }
    ]);
  });
});
