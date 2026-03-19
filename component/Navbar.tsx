import { NAME_ROUTE_HOME } from "@/types/contanst/route.constants";
import TextHoverUnderline from "./Text/TextHoverUnderline";

const Navbar = async () => {

  return (
    <div className="flex gap-5">
      {NAME_ROUTE_HOME.map((item) => (
        <TextHoverUnderline
          key={item.href}
          href={item.href}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default Navbar;
