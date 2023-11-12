import { NUMBERS } from "./numbers.js";
import ERROR from "./error.js";

const { zero, presentAmount } = NUMBERS;
const { prefix } = ERROR;

const messageFormat = {
  errorMessage: (message) => `${prefix} ${message}`,

  preview: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,

  menu: (menuNames, quantities) => `${menuNames} ${quantities}개`,

  preDiscount: (totalprice) => `${totalprice.toLocaleString()}원`,

  free: (totalprice) => (totalprice < presentAmount ? "없음" : "샴페인 1개"),

  benefit: (item) => item !== zero ? `${item.type}${item.amount.toLocaleString()}원` : "없음",

  totalBenefit: (totalDiscountPrice) => `${totalDiscountPrice.toLocaleString()}원`,

  discountedAmount: (total) => `${total.toLocaleString()}원`,

  badge: (selectedBadge) => (selectedBadge !== undefined ? selectedBadge.badge : "없음"),
};

export default messageFormat;
