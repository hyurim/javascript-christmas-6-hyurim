import { BADGE } from "../constants/prompt.js";

const badge = (totalDiscountPrice) => {
  const selectedBadge = BADGE.find(
    (select) => totalDiscountPrice >= select.limit
  );
  return selectedBadge;
}

export default badge;