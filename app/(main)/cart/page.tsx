"use client";

import { useToast } from "@/component/AppToast";
import EmptyCart from "@/component/Product/ProductCart/EmptyCart";
import { cartService } from "@/service/cart.service";
import { ICart } from "@/share/interface/cart.interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import Address from "./component/address";
import ListProduct from "./component/list-product";
import Payment from "./component/payment";
import { useLoading } from "@/component/LoadingScreen";

const CartPage = () => {
  const toast = useToast();
  const { SHOW, HIDE } = useLoading();

  //get list
  const { data, refetch } = useQuery({
    queryKey: ["get-list-cart"],
    queryFn: () => cartService.getListCart(),
  });

  const totalPrice = useMemo(
    () =>
      data?.data?.items?.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
      ) ?? 0,
    [data],
  );

  //update quantity
  const { mutate: updatdeQuantity } = useMutation({
    mutationFn: cartService.patchQuantityCart,
    onSuccess: () => refetch(),
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

  const { mutate: deleteCart } = useMutation({
    mutationFn: cartService.deleteCart,
    onSuccess: () => {
      refetch();
      toast.SUCCESS("Xoá sản phẩm thành công");
    },
    onError: () => toast.ERROR("Xóa sản phẩm thất bại"),
    onMutate: () => SHOW(),
    onSettled: () => HIDE(),
  });

  const onDelete = useCallback((cart: ICart) => {
    deleteCart(cart._id);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-center font-medium text-4xl">Giỏ hàng của bạn</h1>

      {data?.data?.items && data?.data?.items?.length > 0 ? (
        <div className="flex flex-col lg:flex-row max-w-7xl justify-between mx-auto px-4 gap-6">
          <div className="space-y-6 flex-2">
            <ListProduct
              data={data?.data?.items || []}
              onAdd={onAdd}
              onMinus={onMinus}
              onDelete={onDelete}
            />
            <Address />
          </div>

          <Payment totalPrice={totalPrice} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartPage;
