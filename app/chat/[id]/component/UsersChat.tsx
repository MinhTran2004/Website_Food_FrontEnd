import AppChat from "@/component/AppChat";
import { IMessageFirstRoom } from "@/types/interface/message.interface";
import { useParams } from "next/navigation";

interface Props {
  rooms: IMessageFirstRoom[];
}

const UsersChat: React.FC<Props> = ({ rooms }) => {
  if (rooms.length !== 0 && rooms[0].message === null) return;
  const path = useParams();
  
  return (
    <div>
      {rooms.map((items) => (
        <AppChat
          key={items.message._id}
          room={items}
          status={path.id === items.user.id}
        />
      ))}
    </div>
  );
};

export default UsersChat;
