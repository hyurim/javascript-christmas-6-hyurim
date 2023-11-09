const PROMPT = Object.freeze({
  select_date:
    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  menu: "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
  preview: "12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  order_menu: "\n<주문 메뉴>",
  free_menu: "\n<증정 메뉴>",
  benefit: "\n<혜택 내역>",
  total_benefit: "\n<총 혜택 내역>",
  discounted_amount: "\n<할인 후 예상 결제 금액>",
  event_badge: "\n<12월 이벤트 배지>,",
});

const SYMBOLS = Object.freeze({
  won: "원",
  piece: "개",
});

const PROMPT_IN = Object.freeze({
  champagne: "샴페인 1개",
  d_day_discount: "크리스마스 디데이 할인: ",
  weekday_discount: "평일 할인: ",
  specials_discount: "특별 할인 ",
  gift_event: "증정 이벤트:",
});

const BADGE = Object.freeze({
  star: "별",
  tree: "트리",
  santa: "산타",
});

export { PROMPT, SYMBOLS, PROMPT_IN, BADGE };
