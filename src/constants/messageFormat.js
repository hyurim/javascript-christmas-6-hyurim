import { NUMBERS } from "./numbers.js";
import ERROR from "./error.js";
import { PROMPT } from "./prompt.js";

const { zero, presentAmount } = NUMBERS;
const { prefix } = ERROR;
const {month, preview, champagne, piece, won, none} = PROMPT;

const messageFormat = {
  errorMessage: (message) => `${prefix} ${message}`,

  preview: (date) => `${month}${date}${preview}`,

  menu: (menuNames, quantities) => `${menuNames} ${quantities}${piece}`,

  preDiscount: (totalprice) => `${totalprice.toLocaleString()}${won}`,

  free: (totalprice) => (totalprice < presentAmount ? `${none}` : `${champagne}`),

  benefit: (item) => item !== zero ? `${item.type}${item.amount.toLocaleString()}${won}` : `${none}`,

  totalBenefit: (totalDiscountPrice) => `${totalDiscountPrice.toLocaleString()}${won}`,

  discountedAmount: (total) => `${total.toLocaleString()}${won}`,

  badge: (selectedBadge) => (selectedBadge !== undefined ? selectedBadge.badge : `${none}`),
};

export default messageFormat;
