import { BADGE } from "../constants/prompt.js";
import OutputView from "../OutputView.js";

/**
 * 
 * @param {number} totalDiscountPrice - 총 할인 금액
 * @returns {Object} 
 */
const badge = (totalDiscountPrice) => {
  const selectedBadge = BADGE.find(
    (select) => -totalDiscountPrice >= select.limit
  );
  OutputView.badge(selectedBadge);
};

export default badge;
