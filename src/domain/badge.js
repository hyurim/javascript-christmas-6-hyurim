import { BADGE } from "../constants/prompt.js";
import OutputView from "../OutputView.js";

/**
 * 총 할인 금액에 해당하는 뱃지를 찾아서 출력하는 객체
 * @param {number} totalDiscountPrice - 총 할인 금액 (음수)
 */
const badge = (totalDiscountPrice) => {
  const selectedBadge = BADGE.find(
    (select) => -totalDiscountPrice >= select.limit
  );
  OutputView.badge(selectedBadge);
};

export default badge;
