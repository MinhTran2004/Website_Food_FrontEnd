import { HTMLAttributes } from "react";

interface IAppText extends HTMLAttributes<HTMLParagraphElement> {}

const AppText: React.FC<IAppText> = ({ ...props }) => {
  return <p {...props}></p>;
};

export default AppText;

