const DISCOUNT = Object.freeze({
  discount_price: 2023,
  special_discount: 1000,
  basis : 1000,
  day_discount : 100,
  day_basis: 1
});

const DAY = {
  dayOfWeek: Math.floor((13 * 13) / 5) + 1.75,
  week: 7,
  christmas: 25,
  sunday: 0,
};
export { DISCOUNT, DAY };
