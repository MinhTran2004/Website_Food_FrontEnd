import AppChat from "@/component/AppChat";
import { chatService } from "@/service/chat.service";
import { useQuery } from "@tanstack/react-query";

const UsersChat = () => {
  const { data } = useQuery({
    queryKey: ["list-room-user"],
    queryFn: () => chatService.getListRoomUser(),
  });

  const listUser = data?.data?.items || [];

  if (listUser.length === 0) return;

  return (
    <div>
      {listUser.map((items) => (
        <AppChat
          key={items.user.id}
          user={items.user}
          message={items.message}
        />
      ))}
    </div>
  );
};

export default UsersChat;
