const PROMPT = Object.freeze({
  start: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  select_date:
    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  select_menu:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
  preview: "12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  order_menu: "\n<주문 메뉴>",
  pre_discount_total: "\n<할인 전 총주문 금액>",
  free_menu: "\n<증정 메뉴>",
  benefit_detail: "\n<혜택 내역>",
  total_benefit_detail: "\n<총혜택 금액>",
  discounted_amount: "\n<할인 후 예상 결제 금액>",
  event_badge: "\n<12월 이벤트 배지>",
});

const SYMBOLS = Object.freeze({
  won: "원",
  piece: "개",
});

const PROMPT_IN = Object.freeze({
  d_day_discount: "크리스마스 디데이 할인: ",
  weekday_discount: "평일 할인: ",
  weekend_discount: "주말 할인: ",
  specials_discount: "특별 할인: ",
  gift_event: "증정 이벤트: ",
});

const BADGE = Object.freeze([
  { limit: 20000, badge: "산타" },
  { limit: 10000, badge: "트리" },
  { limit: 5000, badge: "별" },
]);

export { PROMPT, SYMBOLS, PROMPT_IN, BADGE };
