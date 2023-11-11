import { NUMBERS } from "../constants/numbers.js";

const { zero } = NUMBERS;

const totalDiscount = (discount) => {
  const total = discount
    .map((cost) => cost.amount)
    .reduce((total, discount) => total + discount, zero);
  return total;
};

export default totalDiscount;
