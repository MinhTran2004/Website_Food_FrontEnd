export type TEXT_TYPO =
  | "HEADER_1"
  | "HEADER_1_B"
  | "HEADER_2"
  | "HEADER_2_B"
  | "HEADER_3"
  | "HEADER_3_B"
  | "HEADER_4"
  | "HEADER_4_B"
  | "HEADER_5"
  | "HEADER_5_B"
  | "LARGE"
  | "LARGE_B"
  | "LARGE_MEDIUM"
  | "LARGE_MEDIUM_B"
  | "BASE_LARGE"
  | "BASE_LARGE_B"
  | "BASE"
  | "BASE_B"
  | "BASE_SMALL"
  | "BASE_SMALL_B"
  | "BASE_SMALL_LEST"
  | "BASE_SMALL_LEST_B";

export const PAGE_LIST = {
  HOME: "",
  PRODUCT: "/product",
} as const;

export type TYPE_PAGE_LIST = keyof typeof PAGE_LIST;
