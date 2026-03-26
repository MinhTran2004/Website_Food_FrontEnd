import AppImage from "@/component/Image/AppImage";
import { IMessage } from "@/types/interface/message.interface";

interface Props {
  messages: IMessage[];
  receiverId: string;
}

const MessengerChat: React.FC<Props> = ({ messages, receiverId }) => {
  if (messages.length === 0)
    return <div className="h-full w-full bg-colorGrayLight" />;

  return (
    <div className="h-full w-full bg-colorGrayLight overflow-y-scroll">
      {messages.length !== 0 &&
        messages.map((msg) => {
          const isMe = msg.senderId !== receiverId;
          const date = new Date(msg.createdAt);
          const minutes = date.getMinutes();
          const hours = date.getHours();
          const day = date.getDate();
          const month = date.getMonth() + 1;

          const formatted = `${hours}:${minutes} - ${day}/${month}`;

          return isMe ? (
            <div
              key={msg._id}
              className={`flex mx-4 my-2 justify-end items-center gap-2`}
            >
              <p className="text-colorGray text-sm">{formatted}</p>
              <div
                className={`px-4 py-1 rounded-full max-w-[60%] bg-blue-500 text-white`}
              >
                {msg.message}
              </div>
            </div>
          ) : (
            <div
              key={msg._id}
              className={`flex mx-4 my-2 justify-start items-center gap-2`}
            >
              <div
                className={`px-4 py-1 rounded-full max-w-[60%] bg-gray-200 text-black`}
              >
                {msg.message}
              </div>
              <p className="text-colorGray text-sm">{formatted}</p>
            </div>
          );
        })}
    </div>
  );
};

export default MessengerChat;
