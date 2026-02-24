"use client";
import { useToast } from "@/component/AppToast";
import AppButton from "@/component/Button/AppButton";
import AppInput from "@/component/Input/AppInput";
import { useLoading } from "@/component/LoadingScreen";
import { addressService } from "@/service/address.service";
import { IBodyPostAddress } from "@/share/interface/address.interface";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import * as Yup from "yup";

interface Props {
  onCancel: (isChecked: boolean) => void;
  refetch: () => void;
}

const FormAdd: React.FC<Props> = ({ onCancel, refetch }) => {
  const toast = useToast();
  const { HIDE, SHOW } = useLoading();

  const { mutate, isPending } = useMutation({
    mutationFn: addressService.createAddress,
    onSuccess: () => {
      toast.SUCCESS("Tạo mới thành công");
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
    addressDetail: "",
    city: "",
    district: "",
    nameAddress: "",
    phone: "",
    isDefault: true,
  };

  const validationSchema = Yup.object({
    addressDetail: Yup.string().required("Không để trống ô nhậpl"),
    city: Yup.string().required("Không để trống ô nhập"),
    district: Yup.string().required("Không để trống ô nhập"),
    nameAddress: Yup.string().required("Không để trống ô nhập"),
    phone: Yup.string()
      .required("Không để trống ô nhập")
      .matches(/^[0-9]{10}$/, "Số điện thoại phải gồm 10 chữ số"),
  });

  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={(values) => mutate(values)}
    >
      {({}) => (
        <Form className="p-6 border border-colorBlue bg-colorBlueLight rounded-lg mb-6">
          <p className="text-xl font-medium mb-2">Thêm Địa Chỉ Mới</p>
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
            </div>

            <div className="flex gap-4">
              <AppButton
                type="submit"
                disabled={isPending}
                isLoading={isPending}
                text={{ children: "Thêm mới", className: "text-sm" }}
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

export default FormAdd;
