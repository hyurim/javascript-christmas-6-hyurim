import { NUMBERS } from "../constants/numbers.js";
import OutputView from "../OutputView.js";

const { zero, presentAmount, champagne } = NUMBERS;

/**
 * 총 할인 금액을 계산하고 출력함.
 * 
 * @param {number} totalPrice - 할인 적용 전 총 주문 가격
 * @param {Array} discount - 각 할인 항목의 금액 정보가 담긴 배열
 * @returns {number} - 홍 할인 금액
 */
const totalDiscount = (totalPrice, discount) => {

  const total = discount.map((cost) => cost.amount)
    .reduce((total, discount) => total + discount, zero);

    totalDiscountOutput(totalPrice, total);

  return total;
};

/**
 * 총 할인 금액 및 할인 적용 후 총 주문 가격 출력.
 * 
 * @param {number} totalPrice - 할인 적용 전 총 주문 가격
 * @param {number} total - 총 할인 금액
 * @returns {void}
 */
const totalDiscountOutput = (totalPrice, total) => {
  OutputView.totalBenefit(total);
  
  const totalDiscountAmount = totalPrice > presentAmount ? totalPrice + total + champagne : totalPrice + total;
  OutputView.discountedAmount(totalDiscountAmount);
}

export default totalDiscount;
