import AppText from "@/component/Text/AppText";
import { COLOR } from "@/share/contanst/color";

const FooterContact= () => {
  return (
    <div className="grid grid-cols-3">
      <AppText
        className="uppercase"
        text="Tầng 4, Tòa nhà số 97 - 99 Láng Hạ, Đống Đa, Hà Nội (Tòa nhà Petrowaco)"
        style={{ color: COLOR.white }}
      />
      <div>
        <AppText
          typo="TEXT_LG"
          className="text-center"
          text="0901191616"
          style={{ color: COLOR.white }}
        />
        <AppText
          typo="TEXT_LG"
          className="text-center"
          text="contact@sm4s.vn"
          style={{ color: COLOR.gray }}
        />
      </div>
      <div>
        <AppText
          typo="TEXT_LG"
          className="text-right"
          text="Nhận thông tin cập nhật mới."
          style={{ color: COLOR.gray }}
        />
        <AppText
          typo="TEXT_LG"
          className="text-right"
          text="Chỉ cần đăng ký"
          style={{ color: COLOR.gray }}
        />
      </div>
    </div>
  );
};

export default FooterContact;
