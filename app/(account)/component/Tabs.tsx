"use client";

import AppLinkButton from "@/component/Button/AppLinkButton";
import { ROUTE } from "@/share/contanst/route.constants";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { CgShoppingBag } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { LuUserRound } from "react-icons/lu";

const classnameActice = "border-l-4 border-colorOrange bg-colorOrangeLight";
const textActice = "text-colorOrange";
const iconActice = "text-colorOrange";

const Tabs = () => {
  const path = usePathname();

  return (
    <div className="md:w-3xs h-fit bg-white rounded-lg overflow-hidden border border-colorGrayLight shadow-[0_0_12px_rgba(149,149,149,0.1)]">
      <AppLinkButton
        buttonDefault
        href={ROUTE.PERSONAL_INFO}
        iconLeft={
          <LuUserRound
            className={clsx(
              path === `/${ROUTE.PERSONAL_INFO}` ? iconActice : "",
            )}
          />
        }
        text={{
          children: "Thông tin cá nhân",
          className: path === `/${ROUTE.PERSONAL_INFO}` ? textActice : "",
        }}
        className={clsx(
          `rounded-none justify-start py-3 px-4`,
          path === `/${ROUTE.PERSONAL_INFO}` && classnameActice,
        )}
      />

      <AppLinkButton
        buttonDefault
        href={ROUTE.ADDRESS_INFO}
        iconLeft={
          <GrLocation
            className={clsx(
              path === `/${ROUTE.ADDRESS_INFO}` ? iconActice : "",
            )}
          />
        }
        text={{
          children: "Địa chỉ",
          className: path === `/${ROUTE.ADDRESS_INFO}` ? textActice : "",
        }}
        className={clsx(
          `rounded-none justify-start py-3 pl-4`,
          path === `/${ROUTE.ADDRESS_INFO}` && classnameActice,
        )}
      />

      <AppLinkButton
        buttonDefault
        href={ROUTE.ORDER_HISTORY}
        iconLeft={
          <CgShoppingBag
            className={clsx(
              path === `/${ROUTE.ORDER_HISTORY}` ? iconActice : "",
            )}
          />
        }
        text={{
          children: "Lịch sử đơn hàng",
          className: path === `/${ROUTE.ORDER_HISTORY}` ? textActice : "",
        }}
        className={clsx(
          `rounded-none justify-start py-3 pl-4`,
          path === `/${ROUTE.ORDER_HISTORY}` && classnameActice,
        )}
      />
    </div>
  );
};

export default Tabs;
