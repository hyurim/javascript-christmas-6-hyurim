import { BADGE } from "./prompt.js";

const messageFormat = {
  preview: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  menu: (menuNames, quantities) => {
    const formattedMenu = menuNames
      .map((name, index) => {
        const quantity =
          quantities && quantities[index] !== null ? quantities[index] : "0";
        return `${name} ${quantity} 개`;
      })
      .join("\n");
    return formattedMenu;
  },
  preDiscount: (totalprice) => `${totalprice.toLocaleString()}원`,
  free: (totalprice) => (totalprice < 120000 ? "없음" : "샴페인 1개"),
  benefit: (discount) => {
    if (discount.length !== 0) {
      const benefitPrint = discount
        .map((item) => `${item.type}: ${item.amount}원`)
        .join("\n");
      return benefitPrint;
    }
    return "없음";
  },
  totalBenefit: (totalDiscount) => {
    const total = totalDiscount.reduce(
      (total, discount) => total + discount,
      0
    );
    return `${total.toLocaleString()}원`;
  },
  discountedAmount: (totalPrice, totalDiscount) => {
    totalDiscount.pop();
    const discount = totalDiscount.reduce(
      (total, discount) => total + discount,
      0
    );
    return `${(totalPrice + discount).toLocaleString()}원`;
  },
  badge: (totalDiscount) => {
    const discount = totalDiscount.reduce(
      (total, discount) => total + discount,
      0
    );
    const selectedBadge = BADGE.find(
      (select) => discount >= select.limit || { badge: "없음" }
    );
    return selectedBadge.badge;
  },
};

export default messageFormat;
