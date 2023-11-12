import { BADGE } from "../constants/prompt.js";
import OutputView from "../OutputView.js";

const badge = (totalDiscountPrice) => {
  const selectedBadge = BADGE.find(
    (select) => -totalDiscountPrice >= select.limit
  );
  OutputView.badge(selectedBadge);
  return selectedBadge;
};

export default badge;
