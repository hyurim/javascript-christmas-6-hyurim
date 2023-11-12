import preDiscountAmount from "../../src/domain/preDiscountAmount.js";

describe("preDiscountAmount 기능 테스트", () => {
  test("테스트 케이스 1: 메뉴와 수량이 주어졌을 때 정확한 총 주문 금액이 계산 되어야 함", () => {
    const menuNames = ["해산물파스타", "레드와인", "초코케이크", "제로콜라"];
    const quantities = [2, 1, 1, 1];

    const result = preDiscountAmount(menuNames, quantities);

    expect(result).toEqual(148000);
  });

  test("테스트 케이스 2: 음료부터 주문되었을 때도 정확한 금액이 계산되어야 함.", () => {
    const menuNames = ["샴페인", "아이스크림", "초코케이크", "해산물파스타", "크리스마스파스타", "티본스테이크", "타파스"];
    const quantities = [1, 1, 1, 1, 1, 1, 3];

    const result = preDiscountAmount(menuNames, quantities);

    expect(result).toEqual(176500);
  })
});


