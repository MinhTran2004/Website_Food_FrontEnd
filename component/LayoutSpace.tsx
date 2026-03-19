import { ReactNode } from "react";

const LayoutSpace = ({ children }: { children: ReactNode }) => {
  return <div className="my-6">{children}</div>;
};

export default LayoutSpace;
