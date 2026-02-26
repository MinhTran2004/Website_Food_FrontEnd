export const TYPE_CATEGORY_PRODUCT = {
  MAIN_COURES: "Món chính",
  DESSERT: "Tráng miệng",
  APPETIZER: "Khai vị",
};

export const TYPE_CATEGORY = ["MAIN_COURES", "DESSERT", "APPETIZER"];

export const HREF_CATEGORY = [
  {
    link: "DESSERT",
    text: "Món tráng miệng",
  },
  {
    link: "MAIN_COURES",
    text: "Món tráng miệng",
  },
  {
    link: "APPETIZER",
    text: "Món khai vị",
  },
];

export const TYPE_FILTER_PRICE = [
  {
    value: "MIN",
    label: "Dưới 5 triệu",
  },
  {
    value: "MEDIUM",
    label: "Từ 5 triệu đến 8 triệu",
  },
  {
    value: "MAX",
    label: "Trên 8 triệu",
  },
];

export type FILTER_PRICE = "MIN" | "MEDIUM" | "MAX";
