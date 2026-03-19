import AppLinkButton from "@/component/Button/AppLinkButton";
import { ROUTE } from "@/types/contanst/route.constants";
import { BsChatText } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

const NavbarFixed = () => {
  return (
    <div className="fixed bottom-5 right-5 z-999 space-y-4">
      {/* <AppLinkButton
        href="#"
        buttonDefault
        className="h-15 w-15 bg-colorOrangeLight rounded-full flex items-center justify-center"
        iconLeft={<BsChatText size={22} className="text-colorOrange"/>}
      /> */}
      <AppLinkButton
        href={ROUTE.CART}
        buttonDefault
        className="h-15 w-15 bg-colorOrangeLight rounded-full flex items-center justify-center"
        iconLeft={<IoCartOutline size={24} className="text-colorOrange"/>}
      />
    </div>
  );
};

export default NavbarFixed;
