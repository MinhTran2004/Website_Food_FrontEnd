export const URLS = {
  // auth
  USER: `/user`,
  LOGIN: `/auth/login`,
  REGISTER: `/auth/register`,
  LOGIN_GOOGLE: `/auth/login-google`,
  LOGIN_FACEBOOK: `/auth/login-facebook`,

  // product
  GET_PRODUCT_BY_ID: (id: string) => `/product/get-product-by-id/${id}`,
  GET_LIST_PRODUCT: `/product/get-list-product`,

  //cart
  CART: `/cart`,
  DELETE_CART: (id: string) => `/cart/${id}`,
  GET_LIST_CART: `/cart/get-list-cart`,

  //adress
  ADDRESS: `/address`,
  GET_LIST_ADDRESS: `/address/get-list-address`,
  GET_ADDRESS_BY_DEFAULT: `/address/get-address-by-default`,
  //order
  GET_LIST_ORDER: `/order/get-list-order`,
  PAYMENT_METHOD_COD: `/order/payment-method-cod`,
};
