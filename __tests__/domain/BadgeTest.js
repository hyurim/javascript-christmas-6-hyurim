import { Console } from "@woowacourse/mission-utils";
import badge from "../../src/domain/badge.js";


const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("badge 기능 테스트", () => {
  const testCases = [
    [0, "없음"],
    [-20001, "산타"],
    [-19999, "트리"],
    [-9999, "별"],
    [1000, "없음"],
  ]

  test.each(testCases)("할인 금액에 따라 결과가 출력되어야 함.",
  (totalDiscountPrice, expectedBadge) => {
    // given
    const logSpy = getLogSpy();

    // when
    badge(totalDiscountPrice);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedBadge));
  });
});
