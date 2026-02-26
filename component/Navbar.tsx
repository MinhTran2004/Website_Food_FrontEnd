import { NAME_ROUTE_HOME } from "@/share/contanst/route.constants";
import { getCurrentPath } from "@/utils/getSeverUrl";
import TextHoverUnderline from "./Text/TextHoverUnderline";

const Navbar = async () => {
  const currentPatch = await getCurrentPath();

  return (
    <div className="flex gap-5">
      {NAME_ROUTE_HOME.map((item) => (
        <TextHoverUnderline
          key={item.href}
          href={item.href}
          text={item.text}
          status={currentPatch === item.href}
        />
      ))}
    </div>
  );
};

export default Navbar;
