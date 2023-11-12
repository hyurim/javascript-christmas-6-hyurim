import { NUMBERS } from "../constants/numbers.js";
import { PROMPT_IN } from "../constants/prompt.js";

const { d_day_discount, weekday_discount, weekend_discount, specials_discount, gift_event } = PROMPT_IN;
const { zero, weekend_start, presentAmount, champagne } = NUMBERS;

const benefit = (christmas, week, special, totalPrice, day) => {
  const discounts = [
    christmasBenefit(christmas),
    weekBenefit(week, day),
    specialBenefit(special),
    giftBenefit(totalPrice),
  ].filter((value) => value !== undefined);

  return discounts;
};

const christmasBenefit = (christmas) =>
  Number(christmas) !== zero ? { type: d_day_discount, amount: -christmas } : undefined;

const weekBenefit = (weekday, day) =>
  day >= weekend_start ? { type: weekend_discount, amount: -weekday } : { type: weekday_discount, amount: -weekday };

const specialBenefit = (special) =>
  Number(special) !== zero ? { type: specials_discount, amount: -special } : undefined;

const giftBenefit = (totalPrice) =>
  totalPrice >= presentAmount ? { type: gift_event, amount: -champagne } : undefined;

export default benefit;
