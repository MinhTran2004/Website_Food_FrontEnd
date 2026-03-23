import AppChat from "@/component/AppChat";
import { IMessageFirstRoom } from "@/types/interface/message.interface";

interface Props{
  rooms: IMessageFirstRoom[];
} 

const UsersChat:React.FC<Props> = ({rooms}) => {

  if (rooms.length === 0) return;

  return (
    <div>
      {rooms.map((items) => (
        <AppChat
          key={items.message._id}
          user={items.user}
          message={items.message}
        />
      ))}
    </div>
  );
};

export default UsersChat;
