export const URLS = {
  // auth
  LOGIN: `/auth/login`,
  REGISTER: `/auth/register`,
  LOGIN_GOOGLE: `/auth/login-google`,
  LOGIN_FACEBOOK: `/auth/login-facebook`,

  // product
  GET_PRODUCT_BY_ID: (id: string) => `/product/get-product-by-id/${id}`,
  GET_LIST_PRODUCT: `/product/get-list-product`,

  //cart
  CART: `/cart`,
  DELETE_CART: (id:string) => `/cart/${id}`,
  PATCH_QUANTITY_CART: `/cart/update-quantity-cart`,
  GET_LIST_CART : `/cart/get-list-cart`
};
