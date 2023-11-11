class OutputFormat {
  totalBenefit(totalDiscount) {
    const total = totalDiscount.reduce(
      (total, discount) => total + discount,
      0
    );
    return total;
  }
}

export default OutputFormat;
