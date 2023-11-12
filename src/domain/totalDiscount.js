import { NUMBERS } from "../constants/numbers.js";
import OutputView from "../OutputView.js";

const { zero, presentAmount, champagne } = NUMBERS;

const totalDiscount = (totalPrice, discount) => {

  const total = discount.map((cost) => cost.amount)
    .reduce((total, discount) => total + discount, zero);

    totalDiscountOutput(totalPrice, total);

  return total;
};

const totalDiscountOutput = (totalPrice, total) => {
  OutputView.totalBenefit(total);
  
  const totalDiscountAmount = totalPrice > presentAmount ? totalPrice + total + champagne : totalPrice + total;
  OutputView.discountedAmount(totalDiscountAmount);
}

export default totalDiscount;
