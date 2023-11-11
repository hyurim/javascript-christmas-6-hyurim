import dateIsValid from "../../src/utils/dateIsValid.js";
import ERROR from "../../src/constants/error.js";

const { prefix, invalid_date_error_message } = ERROR;
describe("날짜 입력 테스트", () => {
  test("숫자 이외의 값을 입력한 경우", async () => {
    const input = "aa";
    expect(() => dateIsValid(input)).toThrow(
      `${prefix} ${invalid_date_error_message}`
    );
  });
  test.each([
    ["-1"],
    ["1106"],
    ["1211"],
    ["-312341"],
    [`${Math.PI}`],
    ["10.06"],
  ])("날짜 이외의 정수가 입력된 경우", (input) => {
    expect(() => dateIsValid(input)).toThrow(
      `${prefix} ${invalid_date_error_message}`
    );
  });
  test.each([
    ["1a1"],
    ["a23"],
    ["25t"],
    ["이십오"],
    ["십일"],
    [" "],
    [" 25"],
    ["2 5"],
    ["25 "],
  ])("공백 및 문자가 입력된 경우", (input) => {
    expect(() => dateIsValid(input)).toThrow(
      `${prefix} ${invalid_date_error_message}`
    );
  });
});
