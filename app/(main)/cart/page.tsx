"use client";

import { useToast } from "@/component/AppToast";
import { useLoading } from "@/component/LoadingScreen";
import EmptyCart from "@/component/Product/ProductCart/EmptyCart";
import { addressService } from "@/service/address.service";
import { cartService } from "@/service/cart.service";
import { orderService } from "@/service/order.interface";
import { IAddress } from "@/share/interface/address.interface";
import { ICart } from "@/share/interface/cart.interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import Address from "./component/address";
import ListProduct from "./component/list-product";
import Payment from "./component/payment";

const CartPage = () => {
  const toast = useToast();
  const { SHOW, HIDE } = useLoading();

  //get address
  const { data: dataAddress } = useQuery({
    queryKey: ["get-address"],
    queryFn: () => addressService.getAddressByDefault(),
  });
  const address: IAddress | null = dataAddress?.data ?? null;

  //get list
  const { data: dataCarts, refetch: refetchCart } = useQuery({
    queryKey: ["get-list-cart"],
    queryFn: () => cartService.getListCart(),
  });

  const totalPrice = useMemo(
    () =>
      dataCarts?.data?.items?.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
      ) ?? 0,
    [dataCarts],
  );

  //update quantity
  const { mutate: updatdeQuantity } = useMutation({
    mutationFn: cartService.patchCart,
    onSuccess: () => refetchCart(),
    onError: (err) => toast.ERROR(err.message),
    onMutate: () => SHOW(),
    onSettled: () => HIDE(),
  });

  const onMinus = useCallback((cart: ICart) => {
    if (cart.quantity > 1) {
      updatdeQuantity({
        idCart: cart._id,
        idProduct: cart.product._id,
        quantity: cart.quantity - 1,
      });
    }
  }, []);

  const onAdd = useCallback((cart: ICart) => {
    updatdeQuantity({
      idCart: cart._id,
      idProduct: cart.product._id,
      quantity: cart.quantity + 1,
    });
  }, []);

  //delete product in cart
  const { mutate: deleteCart } = useMutation({
    mutationFn: cartService.deleteCart,
    onSuccess: () => {
      refetchCart();
      toast.SUCCESS("Xoá sản phẩm thành công");
    },
    onError: () => toast.ERROR("Xóa sản phẩm thất bại"),
    onMutate: () => SHOW(),
    onSettled: () => HIDE(),
  });

  const onDelete = useCallback((cart: ICart) => {
    deleteCart(cart._id);
  }, []);

  //payment
  const { mutate: onPayment } = useMutation({
    mutationFn: orderService.paymentMethodCod,
    onSuccess: () => {
      refetchCart();
      toast.SUCCESS("Đặt hàng thành công");
    },
    onError: () => toast.ERROR("Đặt hàng thất bại"),
    onMutate: () => SHOW(),
    onSettled: () => HIDE(),
  });

  return (
    <div className="space-y-6">
      <h1 className="text-center font-medium text-4xl">Giỏ hàng của bạn</h1>

      {dataCarts?.data?.items && dataCarts?.data?.items?.length > 0 ? (
        <div className="flex flex-col lg:flex-row max-w-7xl justify-between mx-auto px-4 gap-6">
          <div className="space-y-6 flex-2">
            <ListProduct
              data={dataCarts?.data?.items || []}
              onAdd={onAdd}
              onMinus={onMinus}
              onDelete={onDelete}
            />
            {address && <Address {...address} />}
          </div>

          {address && (
            <Payment
              onPayment={onPayment}
              address={address}
              carts={dataCarts.data.items || []}
              total={totalPrice}
            />
          )}
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartPage;
