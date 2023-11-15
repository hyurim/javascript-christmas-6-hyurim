/**
 * @fileoverview badge 기능에 대한 테스트 파일
 * @module badgeTest
 */
import { Console } from "@woowacourse/mission-utils";
import badge from "../../src/domain/badge.js";

/**
 * Console 모듈에서 print 메서드의 spyOn을 생성하여 반환하는 함수
 * @returns {jest.SpyInstance} Console.print의 spyOn
 */
const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();

  return logSpy;
};
/**
 * badge 기능에 대한 테스트 수트
 */
describe("badge 기능 테스트", () => {
  let logSpy;
  /**
   * 각 테스트 케이스 실행 전에 logSpy를 초기화하는 함수
   */
  beforeEach(() => {
    logSpy = getLogSpy();
  });

  test("테스트 케이스 1: 할인 금액이 0일 때 없음이 출력되어야 함.", () => {
    // given
    const totalDiscountPrice = 0;

    // when
    badge(totalDiscountPrice);

    // then
    const expected = "없음"
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });

  test("테스트 케이스 2: 할인 금액이 2만원이 넘을 때 산타가 출력되어야 함", () => {
    // given
    const totalDiscountPrice = -20001;

    // when
    badge(totalDiscountPrice);

    // then
    const expected = "산타"
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });

  test("테스트 케이스 3: 할인 금액이 1만원 이상 2만원 미만일 때 트리가 출력되어야 함", () => {
    // given
    const totalDiscountPrice = -19999;

    // when
    badge(totalDiscountPrice);

    // then
    const expected = "트리"
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });
  
  test("테스트 케이스 4: 할인 금액이 5천원 이상 1만원 미만일 때 별이 출력되어야 함.", () => {
    // given
    const totalDiscountPrice = -9999;

    // when
    badge(totalDiscountPrice);

    // then
    const expected = "별"
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });

  test("테스트 케이스 5: 할인 금액이 0원 이상일 때 없음이 출력되이어야 함.", () => {
    // given
    const totalDiscountPrice = 1000;

    // when
    badge(totalDiscountPrice);

    // then
    const expected = "없음"
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });
});