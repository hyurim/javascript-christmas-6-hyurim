/**
 * @fileoverview 날짜 입력 유효성 검사에 대한 테스트 파일
 * @module DateValidationTest
 */
import dateIsValid from "../../src/utils/dateIsValid.js";
import ERROR from "../../src/constants/error.js";

const { prefix, invalid_date_error_message } = ERROR;
/**
 * 유효하지 않은 날짜 에러를 검증하는 함수
 * @param {string} input - 검증할 날짜 값
 */
const expectInValidDateError = (input) => {
  expect(() => dateIsValid(input)).toThrow(
    `${prefix} ${invalid_date_error_message}`
  );
};

/**
 * 날짜 입력에 대한 테스트 수트
 */
describe("날짜 입력 테스트", () => {
  test("정상 입력", async () => {
    // given
    const input = "25";

    // when, then
    expect(() => dateIsValid(input)).not.toThrow();
  });

  test.each([["one"], ["ten"], ["five"], ["christmas"], ["twenty"], ["today"],])(
    "숫자 이외의 값이 입력된 경우",
    (input) => {
      // when, then
      expectInValidDateError(input);
    }
  );
  test.each([["-1"], ["1106"], ["1211"], ["-312341"], [`${Math.PI}`], ["10.06"],])(
    "날짜 이외의 정수가 입력된 경우", 
    (input) => {
    // when, then
    expectInValidDateError(input);
  });
  test.each([["1a1"], ["a23"], ["25t"], ["이십오"], ["십일"], [" "], [" 25"], ["2 5"], ["25 "],])(
    "공백 및 문자가 입력된 경우", 
    (input) => {
    // when, then
    expectInValidDateError(input);
  });
});
