import Avatar from "./Avatar";

import recieverPic from "../../assets/recieverPic.png";

export default function ChatMain() {
  return (
    <div id="chat-main" className="h-[212px] px-2 pt-4">
      <Avatar size="40" userPic={recieverPic} />
    </div>
  );
}
