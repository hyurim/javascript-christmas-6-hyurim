import { NUMBERS } from "../constants/numbers.js";
import OutputView from "../OutputView.js";

const { zero } = NUMBERS;

const totalDiscount = (totalPrice, discount) => {

  const total = discount.map((cost) => cost.amount)
    .reduce((total, discount) => total + discount, zero);
    
    OutputView.totalBenefit(total);
    OutputView.discountedAmount(totalPrice, total);
  return total;
};

export default totalDiscount;
