import { NUMBERS } from "../constants/numbers.js";
import { PROMPT_IN } from "../constants/prompt.js";

const { d_day_discount, weekday_discount, weekend_discount, specials_discount, gift_event } = PROMPT_IN;
const { zero, weekend_start, presentAmount, champagne } = NUMBERS;

/**
 * 할인 혜택을 배열에 추가하여 반환한다.
 * 
 * @param {number} christmas - 크리스마스 디데이 할인 금액
 * @param {number} week - 주중 또는 주말 할인 금액
 * @param {number} special - 특별 할인 금액
 * @param {number} totalPrice - 총 주문 가격
 * @param {number} day - 입력한 날짜의 요일
 * @returns {Array} - 계산된 할인 혜택 목록
 */
const benefit = (christmas, week, special, totalPrice, day) => {
  const discounts = [
    christmasBenefit(christmas),
    weekBenefit(week, day),
    specialBenefit(special),
    giftBenefit(totalPrice),
  ].filter((value) => value !== undefined);

  return discounts;
};

/**
 * 크리스마스 디데이 할인 혜택을 금액과 함께 객체로 반환한다.
 * 
 * @param {number} christmas - 크리스마스 디데이 할인 금액
 * @returns {Object|undefined} - 크리스마스 디데이 할인 정보 및 금액
 */
const christmasBenefit = (christmas) =>
  Number(christmas) !== zero ? { type: d_day_discount, amount: -christmas } : undefined;

/**
 * 주중 또는 주말 할인 혜택을 금액과 함께 객체로 반환한다.
 * @param {number} week - 주중 또는 주말 할인 금액
 * @param {number} day - 입력한 날짜의 요일
 * @returns {Object} - 주중 또는 주말 할인 정보 및 금액
 */
const weekBenefit = (week, day) =>
  day >= weekend_start ? { type: weekend_discount, amount: -week } : { type: weekday_discount, amount: -week };

/**
 * 특별 할인 혜택을 금액과 함께 객체로 반환한다.
 * 
 * @param {number} special - 특별 할인 금액
 * @returns {Object|undefined} - 특별 할인 정보 및 금액
 */
const specialBenefit = (special) =>
  Number(special) !== zero ? { type: specials_discount, amount: -special } : undefined;

/**
 * 선물 이벤트 혜택을 금액과 함께 객체로 반환한다.
 * 
 * @param {number} totalPrice - 총 주문 가격
 * @returns {Object|undefined} - 선물 이벤트 할인 정보 및 금액
 */
const giftBenefit = (totalPrice) =>
  totalPrice >= presentAmount ? { type: gift_event, amount: -champagne } : undefined;

export default benefit;
