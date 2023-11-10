const messageFormat = {
  preview: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  menu: (menuNames, quantities) => {
    const formattedMenu = menuNames
      .map((name, index) => `${name} ${quantities[index]} 개`)
      .join("\n");
    return formattedMenu;
  },
  preDiscount: (totalprice) => `${totalprice.toLocaleString()}원`,
  free: (totalprice) => (totalprice < 120000 ? "없음" : "샴페인 1개"),
  benefit: (discount) => {
    if(discount.length !== 0){
      const benefitPrint = discount.map((item) => `${item.type}: ${item.amount}원`).join("\n");
      return benefitPrint;
    }
    return "없음";
  }

};

export default messageFormat;
