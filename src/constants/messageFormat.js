import { NUMBERS } from "./numbers.js";
import { BADGE } from "./prompt.js";

const { zero, champagne } = NUMBERS;

const messageFormat = {
  preview: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`, // V
  menu: (menuNames, quantities) => {
    const formattedMenu = menuNames
      .map((name, index) => {
        const quantity =
          quantities && quantities[index] !== null ? quantities[index] : "0";
        return `${name} ${quantity}개`;
      })
      .join("\n");
    return formattedMenu;
  },
  preDiscount: (totalprice) => `${totalprice.toLocaleString()}원`, // V
  free: (totalprice) => (totalprice < 120000 ? "없음" : "샴페인 1개"), // V
  benefit: (discount) => {
    if (discount.length !== zero) {
      const benefitPrint = discount
        .map((item) => `${item.type}${item.amount}원`)
        .join("\n");
      return benefitPrint;
    }
    return "없음";
  },
  totalBenefit: (totalDiscountPrice) =>
    `${totalDiscountPrice.toLocaleString()}원`,

  discountedAmount: (totalPrice, totalDiscount) => {
    return `${(totalPrice + totalDiscount + champagne).toLocaleString()}원`;
  },
  badge: (totalDiscountPrice) => {
    const selectedBadge = BADGE.find(
      (select) => totalDiscountPrice >= select.limit || { badge: "없음" }
    );
    return selectedBadge.badge;
  },
};

export default messageFormat;
