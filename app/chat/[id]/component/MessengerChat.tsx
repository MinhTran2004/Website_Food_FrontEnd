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

          return isMe ? (
            <div key={msg._id} className={`flex mx-4 my-2 justify-end`}>
              <div
                className={`px-4 py-2 rounded-full max-w-[60%] bg-blue-500 text-white`}
              >
                {msg.message}
              </div>
            </div>
          ) : (
            <div key={msg._id} className={`flex mx-4 my-2 justify-start`}>
              <div
                className={`px-4 py-2 rounded-full max-w-[60%] bg-gray-200 text-black`}
              >
                {msg.message}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MessengerChat;
