import orderMenu from "../../src/domain/orderMenu.js";

describe("orderMenu 기능 테스트", () => {
  const testCases = [
    {
      description: "음식 문자열 올바르게 파싱",
      food: "해산물파스타-2,레드와인-1,초코케이크-1",
      expected: {
        menuNames: ["해산물파스타", "레드와인", "초코케이크"],
        quantities: ["2", "1", "1"],
      },
    },
    {
      description: "다양한 음식을 처리할 수 있음",
      food: "타파스-3,바비큐립-2,크리스마스파스타-1,레드와인-1,아이스크림-1",
      expected: {
        menuNames: ["타파스", "바비큐립", "크리스마스파스타", "레드와인", "아이스크림"],
        quantities: ["3", "2", "1", "1", "1"],
      },
    },
  ];

  test.each(testCases)("테스트 케이스: %s", ({ food, expected }) => {
    // when
    const result = orderMenu(food);

    // then
    expect(result).toEqual(expected);
  });
});