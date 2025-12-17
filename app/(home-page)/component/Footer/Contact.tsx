import AppText from "@/component/Text/AppText";
import { COLOR } from "@/share/contanst/color";

const FooterConatct = () => {
  return (
    <div className="grid grid-cols-3 ">
      <AppText
        color={COLOR.gray}
        className="uppercase"
        text="Tầng 4, Tòa nhà số 97 - 99 Láng Hạ, Đống Đa, Hà Nội (Tòa nhà Petrowaco)"
      />
      <div>
        <AppText
          color={COLOR.white}
          typo="LARGE_MEDIUM"
          className="text-center"
          text="0901191616"
        />
        <AppText
          color={COLOR.gray}
          typo="BASE_LARGE"
          className="text-center"
          text="contact@sm4s.vn"
        />
      </div>
      <div>
        <AppText
          color={COLOR.gray}
          typo="BASE_LARGE"
          className="text-right"
          text="Nhận thông tin cập nhật mới."
        />
        <AppText
          color={COLOR.gray}
          typo="BASE_LARGE"
          className="text-right"
          text="Chỉ cần đăng ký"
        />
      </div>
    </div>
  );
};

export default FooterConatct;
