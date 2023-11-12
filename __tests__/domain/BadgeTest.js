import badge from "../../src/domain/badge.js";

describe("badge 기능 테스트", () => {
  test("테스트 케이스 1: 할인 금액이 0일 때 배지는 '없음'이어야 함", () => {
    const totalDiscountPrice = 0;

    const result = badge(totalDiscountPrice);

    expect(result).toEqual(undefined);
  });

  test("테스트 케이스 2: 할인 금액이 2만원이 넘을 때 산타 배지가 반환되어야 함", () => {
    const totalDiscountPrice = -20001;

    const result = badge(totalDiscountPrice);

    expect(result.badge).toEqual("산타");
  });

  test("테스트 케이스 2: 할인 금액이 1만원 이상 2만원 미만일 때 트리 배지가 반환되어야 함", () => {
    const totalDiscountPrice = -19999;

    const result = badge(totalDiscountPrice);

    expect(result.badge).toEqual("트리");
  });
  test("테스트 케이스 3: 할인 금액이 5천원 이상 1만원 미만일 때 별 배지가 반환되어야 함.", () => {
    const totalDiscountPrice = -9999;

    const result = badge(totalDiscountPrice);

    expect(result.badge).toEqual("별");
  });
  test("테스트 케이스 4: 할인 금액이 0원 이상일 때 '없음' 이여야 함.", () => {
    const totalDiscountPrice = 1000;

    const result = badge(totalDiscountPrice);
    expect(result).toEqual(undefined);
  });
});
