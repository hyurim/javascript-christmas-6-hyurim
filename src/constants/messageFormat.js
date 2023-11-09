const messageFormat = {
  preview: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  menu: (menuNames, quantities) => {
    const formattedMenu = menuNames
      .map((name, index) => `${name} ${quantities[index]} 개`)
      .join("\n");
    return formattedMenu;
  },
  preDiscount: (totalprice) => `${totalprice}원`,
};

export default messageFormat;
