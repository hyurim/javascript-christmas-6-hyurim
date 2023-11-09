const orderMenu = (food) => {
  const menuNames = food.match(/[^\d,-]+/g);
  const quantities = food.match(/\d+/g);
  return { menuNames, quantities };
};

export default orderMenu;
