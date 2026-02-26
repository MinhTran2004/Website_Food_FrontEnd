"use client";

import { useToast } from "@/component/AppToast";
import AppButton from "@/component/Button/AppButton";
import AppInput from "@/component/Input/AppInput";
import { cartService } from "@/service/cart.service";
import { IBodyPostCart } from "@/share/interface/cart.interface";
import { IProduct } from "@/share/interface/product.interface";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { IoMdRemove } from "react-icons/io";
import * as Yup from "yup";

const PaymentProduct: React.FC<IProduct> = ({ ...product }) => {
  const toast = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: cartService.createCart,
    onSuccess: () => {
      toast.SUCCESS("Thêm vào giỏ hàng thành công");
    },
    onError:  (err) => {
      toast.ERROR(err.message);
    },
  });

  const initValues = {
    countProduct: 1,
  };

  const validation = Yup.object({
    countProduct: Yup.number().min(1, "Tối thiểu 1 sản phẩm"),
  });

  return (
    <Formik
      initialValues={initValues}
      validationSchema={validation}
      onSubmit={({ countProduct }) => {
        const newCart: IBodyPostCart = {
          idProduct: product._id,
          quantity: countProduct,
        };
        mutate(newCart);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className="space-y-4">
          <div className="flex border border-colorGray rounded-full px-5 py-1 gap-2 w-fit">
            <AppButton
              buttonDefault
              type="button"
              iconLeft={<IoMdRemove />}
              onClick={() => {
                if (values.countProduct > 1) {
                  setFieldValue("countProduct", values.countProduct - 1);
                }
              }}
            />
            <AppInput name="countProduct" className="w-2 h-4" />
            <AppButton
              buttonDefault
              type="button"
              iconLeft={<FiPlus />}
              className="pl-1"
              onClick={() => {
                setFieldValue("countProduct", values.countProduct + 1);
              }}
            />
          </div>

          <div className="space-y-4">
            <AppButton
              className="border border-colorOrange hover:bg-colorWhite hover:text-colorOrange sm:w-fit w-full"
              disabled={isPending}
              isLoading={isPending}
              type="submit"
              text={{ children: "Thêm giỏ hàng" }}
            />

            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">Chia sẻ: </p>
              <div className="flex gap-4">
                <AppButton buttonDefault iconLeft={<FaFacebookF />} />
                <AppButton buttonDefault iconLeft={<FaGoogle />} />
                <AppButton buttonDefault iconLeft={<FaTwitter />} />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentProduct;
