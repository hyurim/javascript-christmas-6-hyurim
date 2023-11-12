import { NUMBERS } from "./numbers.js";
import ERROR from "./error.js";
import { EOL as LINE_SEPARATOR } from "os";

const { zero, presentAmount, champagne } = NUMBERS;
const { prefix } = ERROR;

const messageFormat = {
  errorMessage: (message) => `${prefix} ${message}`,

  preview: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,

  menu: (menuNames, quantities) =>
    menuNames
      .map((name, index) => {
        const quantity = quantities ? quantities[index] : "0";
        return `${name} ${quantity}개`;
      })
      .join(LINE_SEPARATOR),

  preDiscount: (totalprice) => `${totalprice.toLocaleString()}원`,

  free: (totalprice) => (totalprice < presentAmount ? "없음" : "샴페인 1개"),

  benefit: (discount) =>
    discount.length !== zero
      ? discount.map((item) => `${item.type}${item.amount.toLocaleString()}원`).join(LINE_SEPARATOR)
      : "없음",

  totalBenefit: (totalDiscountPrice) => `${totalDiscountPrice.toLocaleString()}원`,

  discountedAmount: (totalPrice, totalDiscount) =>
    totalPrice > presentAmount
      ? `${(totalPrice + totalDiscount + champagne).toLocaleString()}원`
      : `${(totalPrice + totalDiscount).toLocaleString()}원`,

  badge: (selectedBadge) => (selectedBadge !== undefined ? selectedBadge.badge : "없음"),
};

export default messageFormat;
