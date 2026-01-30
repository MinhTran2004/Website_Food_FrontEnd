export const ROUTE = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    PRODUCT: '/product',
    PRODUCTID: (id: string) => `/product/${id}`,
    NEWS: '/news',
    CONTACT: '/contact'
}

export const NAME_ROUTE_HOME = [
    {
        href: ROUTE.HOME,
        text: "Trang chủ"
    },
    {
        href: ROUTE.PRODUCT,
        text: "Sản phẩm"
    },
    {
        href: ROUTE.NEWS,
        text: "Tin tức"
    },
    {
        href: ROUTE.CONTACT,
        text: "Liên hệ"
    }
]

export const NAME_ROUTE = [
    {
        href: ROUTE.HOME,
        text: "Trang chủ"
    },
    {
        href: ROUTE.LOGIN,
        text: "Đăng nhập"
    },
    {
        href: ROUTE.REGISTER,
        text: "Đăng ký"
    },
    {
        href: ROUTE.PRODUCT,
        text: "Sản phẩm"
    },
    {
        href: ROUTE.NEWS,
        text: "Tin tức"
    },
    {
        href: ROUTE.CONTACT,
        text: "Kết nối"
    }
]

export type TYPE_ROUTE = keyof typeof ROUTE;