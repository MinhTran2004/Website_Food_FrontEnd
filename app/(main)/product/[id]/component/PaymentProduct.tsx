'use client'

import AppButton from "@/component/Button/AppButton";
import AppInput from "@/component/Input/AppInput";
import { Form, Formik } from "formik";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { IoMdRemove } from "react-icons/io";
import * as Yup from "yup";



const PaymentProduct = () => {
    const initValues = {
        countProduct: 1
    }

    const validation = Yup.object({
        countProduct: Yup.number().min(1, "Tối thiểu 1 sản phẩm"),
    })

    return (
        <Formik
            initialValues={initValues}
            validationSchema={validation}
            onSubmit={() => { }}
        >
            {({ isSubmitting }) => (
                <Form className="space-y-4">
                    <div className="flex border border-colorGray rounded-full px-5 py-1 gap-2 w-fit">
                        <AppButton buttonDefault iconLeft={<IoMdRemove />} />
                        <AppInput name="countProduct" className="w-2 h-4" />
                        <AppButton buttonDefault iconLeft={<FiPlus />} className="pl-1" />
                    </div>

                    <div className="space-y-4">
                        <AppButton
                            className="border border-colorOrange hover:bg-colorWhite hover:text-colorOrange"
                            disabled={isSubmitting}
                            isLoading={isSubmitting}
                            type="submit"
                            text={{ children: "Thêm giỏ hàng" }} />

                        <div className="flex items-center gap-2">
                            <p className="text-sm font-medium">Chia sẻ: </p>
                            <div className="flex gap-4">
                                <AppButton buttonDefault iconLeft={<FaFacebookF />}/>
                                <AppButton buttonDefault iconLeft={<FaGoogle />}/>
                                <AppButton buttonDefault iconLeft={<FaTwitter />}/>
                            </div>
                        </div>
                    </div>

                </Form>
            )}

        </Formik>
    )
}

export default PaymentProduct;