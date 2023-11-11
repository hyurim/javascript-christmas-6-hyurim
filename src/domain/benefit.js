import { NUMBERS } from "../constants/numbers.js";
import { PROMPT_IN } from "../constants/prompt.js";

const {
  d_day_discount,
  weekday_discount,
  weekend_discount,
  specials_discount,
  gift_event,
} = PROMPT_IN;
const { zero, weekend_start, champagne } = NUMBERS;
const benefit = (christmas, week, special, totalPrice, day) => {
  let discounts = [];
  const christmasDiscountInfo = christmasBenefit(christmas);
  const weekDiscountInfo = weekBenefit(week, day);
  const specialDiscountInfo = specialBenefit(special);
  const giftDiscountInfo = giftBenefit(totalPrice);
  discounts.push(christmasDiscountInfo);
  discounts.push(weekDiscountInfo);
  discounts.push(specialDiscountInfo);
  discounts.push(giftDiscountInfo);

  return discounts.filter((value) => value !== undefined);
};

const christmasBenefit = (christmas) => {
  if (christmas !== zero) {
    return { type: d_day_discount, amount: christmas };
  }
};
const weekBenefit = (weekday, day) => {
  if (day >= weekend_start) {
    return { type: weekend_discount, amount: weekday };
  }
  return { type: weekday_discount, amount: weekday };
};

const specialBenefit = (special) => {
  if (special !== zero) {
    return { type: specials_discount, amount: special };
  }
};

const giftBenefit = (totalPrice) => {
  if (totalPrice >= 120000) {
    return { type: gift_event, amount: -champagne };
  }
};
export default benefit;
