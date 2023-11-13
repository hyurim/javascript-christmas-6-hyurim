import totalDiscount from "../../src/domain/totalDiscount.js";

describe("TotalDiscount 기능 테스트", () => {
  test("테스트 케이스 1: 크리스마스일 때 평일 할인(디저트 1개)), 특별 할인, 증정 이벤트의 총 합", () => {
    // given
    const discount = [
      { type: "크리스마스 디데이 할인: ", amount: -3400 },
      { type: "평일 할인: ", amount: -2023 },
      { type: "특별 할인: ", amount: -1000 },
      { type: "증정 이벤트: ", amount: -25000 },
    ];
    // when
    const result = totalDiscount(0, discount);
    
    // then
    const expected = -31423
    expect(result).toEqual(expected);
  });

  test("테스트 케이스 2: 토요일일 때 주말 할인(메인 2개)이 리턴 값으로 나와야 함.", () => {
    // given
    const discount = [
      { type: "크리스마스 디데이 할인: ", amount: -2500 },
      { type: "주말 할인: ", amount: -4046 },
      { type: "증정 이벤트: ", amount: -25000 },
    ];
    // when
    const result = totalDiscount(0, discount);
    
    // then
    const expected = -31546
    expect(result).toEqual(expected);
  });

  test("테스트 케이스 3: 크리스마스 이후 평일 할인(디저트 3개)이 리턴 값으로 나와야 함.", () => {
    // given
    const discount = [
      { type: "평일 할인: ", amount: -6069 },
      { type: "증정 이벤트: ", amount: -25000 },
    ];
    // when
    const result = totalDiscount(0, discount);
    
    // then
    const expected = -31069
    expect(result).toEqual(expected);
  });

  test("테스트 케이스 4: 크리스마스 이후 주말 할인(메인 5개)이 리턴 값으로 나와야 함.", () => {
    // given
    const discount = [
      { type: "주말 할인: ", amount: -10115 },
      { type: "증정 이벤트: ", amount: -25000 },
    ];
    // when
    const result = totalDiscount(0, discount);
    
    // then
    const expected = -35115
    expect(result).toEqual(expected);
  });

  test("테스트 케이스 5: 크리스마스 이후 평일 할인(디저트 4개)와 특별 할인이 리턴 값으로 나와야 함.", () => {
    // given
    const discount = [
      { type: "평일 할인: ", amount: -8092 },
      { type: "특별 할인: ", amount: -1000 },
      { type: "증정 이벤트: ", amount: -25000 },
    ];
    // when
    const result = totalDiscount(0, discount);
    
    // then
    const expected = -34092
    expect(result).toEqual(expected);
  });

  test("테스트 케이스 6: 1만원 이하 금액이라 할인 혜택이 적용되지 않아야 함.", () => {
    // given
    const discount = [];

    // when
    const result = totalDiscount(0, discount);
    
    // then
    const expected = 0
    expect(result).toEqual(expected);
  });

  test("테스트 케이스 7: 1만원 이상 12만원 이하 금액이라 샴페인 증정이 되지 않아야 함.", () => {
    // given
    const discount = [
      { type: "크리스마스 디데이 할인: ", amount: -3300 },
      { type: "평일 할인: ", amount: -4046 },
      { type: "특별 할인: ", amount: -1000 },
    ];

    // when
    const result = totalDiscount(0, discount);
    
    // then
    const expected = -8346
    expect(result).toEqual(expected);
  });
});
