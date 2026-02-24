"use client";
import { useToast } from "@/component/AppToast";
import AppButton from "@/component/Button/AppButton";
import AppCheckBox from "@/component/CheckBox/AppCheckBox";
import AppCheckBoxFormik from "@/component/CheckBox/AppCheckBoxFormik";
import AppInput from "@/component/Input/AppInput";
import { useLoading } from "@/component/LoadingScreen";
import { addressService } from "@/service/address.service";
import {
  IAddress,
  IBodyPostAddress,
} from "@/share/interface/address.interface";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import * as Yup from "yup";

interface Props {
  onCancel: (isChecked: boolean) => void;
  dataInit: IAddress;
  refetch: () => void;
}

const FormUpdate: React.FC<Props> = ({ dataInit, onCancel, refetch }) => {
  const toast = useToast();
  const { HIDE, SHOW } = useLoading();

  const { mutate, isPending } = useMutation({
    mutationFn: addressService.patchAddress,
    onSuccess: () => {
      toast.SUCCESS("Cập nhật thành công");
      onCancel(false);
      refetch();
    },
    onError: (err) => {
      toast.ERROR(err.message);
    },
    onMutate: () => SHOW(),
    onSettled: () => HIDE(),
  });

  const initValues: IBodyPostAddress = {
    addressDetail: dataInit.addressDetail,
    city: dataInit.city,
    district: dataInit.district,
    nameAddress: dataInit.nameAddress,
    phone: dataInit.phone,
    isDefault: dataInit.isDefault,
  };

  const validationSchema = Yup.object({
    addressDetail: Yup.string().required("Không để trống ô nhậpl"),
    city: Yup.string().required("Không để trống ô nhập"),
    district: Yup.string().required("Không để trống ô nhập"),
    nameAddress: Yup.string().required("Không để trống ô nhập"),
    phone: Yup.string()
      .required("Không để trống ô nhập")
      .matches(/^[0-9]{10}$/, "Số điện thoại phải gồm 10 chữ số"),
    isDefault: Yup.boolean(),
  });
  
  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const payload = {
          _id: dataInit._id,
          ...values,
        };
        mutate(payload);
      }}
    >
      {({}) => (
        <Form className="p-6 border border-colorBlue bg-colorBlueLight rounded-lg mb-6">
          <p className="text-xl font-medium mb-2">Thay đổi địa chỉ</p>
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-x-4">
                <AppInput
                  name="nameAddress"
                  label="Tên Địa Chỉ"
                  placeholder="VD: Nhà riêng, Công ty"
                />

                <AppInput
                  name="phone"
                  label="Số Điện Thoại"
                  placeholder="09xxxxxxxxxx"
                />
              </div>

              <AppInput
                name="addressDetail"
                label="Địa Chỉ Chi Tiết"
                placeholder="Số nhà, ngõ,...."
              />

              <div className="grid grid-cols-2 gap-x-4">
                <AppInput
                  name="district"
                  label="Quận/Huyện"
                  placeholder="Quận/Huyện"
                />

                <AppInput
                  name="city"
                  label="Thành Phố"
                  placeholder="Thành phố"
                />
              </div>

              <AppCheckBoxFormik
                name="isDefault"
                label={{ children: "Đặt làm mặc định" }}
              />
            </div>

            <div className="flex gap-4">
              <AppButton
                type="submit"
                disabled={isPending}
                isLoading={isPending}
                text={{ children: "Cập nhật", className: "text-sm" }}
                className="px-6 min-h-[40px] rounded-lg"
              />
              <AppButton
                disabled={isPending}
                text={{
                  children: "Hủy",
                  className: "text-sm text-colorBlack",
                }}
                className="px-6 min-h-[40px] rounded-lg bg-white border border-colorGray"
                onClick={() => onCancel(false)}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormUpdate;
