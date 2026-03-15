import { HiOutlinePlusSm } from "react-icons/hi";
import { GoSmiley } from "react-icons/go";
import { BsSend } from "react-icons/bs";
import AppInput from "@/component/Input/AppInput";
import AppButton from "@/component/Button/AppButton";

interface Props {
  onMessage: (text: string) => void;
  onSend: () => void;
  value: string
}

const SendChat: React.FC<Props> = ({ value, onMessage, onSend }) => {
  return (
    <div className="flex items-center gap-6 p-4">
      <AppButton buttonDefault iconLeft={<HiOutlinePlusSm />} />
      <AppInput
        viewExtra="w-full"
        value={value}
        onChange={(e) => onMessage(e.target.value)}
      />
      <AppButton buttonDefault iconLeft={<GoSmiley />} />
      <AppButton buttonDefault iconLeft={<BsSend />} onClick={onSend} />
    </div>
  );
};

export default SendChat;
