const totalDiscount = (discount) => {
  const total = discount
    .map((cost) => cost.amount)
    .reduce((total, discount) => total + discount, 0);
    return total;
};

export default totalDiscount;
