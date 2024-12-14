// import Message from "./Message.jsx";
import { formatTime } from "../../timeFormatter.js";
import Avatar from "./Avatar.jsx";

import recieverPic from "../../assets/recieverPic.png";
import senderPic from "../../assets/senderPic.png";

//dummy data
const CURRENT_USER = {
  id: "7",
  name: "You",
  avatar: senderPic,
};

export default function MessageList({ messages }) {
  const isMyMessage = messages[0].senderId === CURRENT_USER.id;

  if (!isMyMessage) {
    return (
      <div className="mb-2 flex flex-col">
        <div className="mb-2 flex gap-3">
          <Avatar size="40" userPic={messages[0].senderAvatar} />
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <p className="text-[14px] font-bold leading-5 text-white">
                {messages[0].senderName}
              </p>
              <span className="text-secondary text-xs font-medium leading-5">
                ·
              </span>
              <p className="text-secondary text-xs font-medium leading-5">
                {formatTime(messages[0].createdAt)}
              </p>
            </div>
            {messages.map((message) => {
              return (
                <p
                  className="break-all text-[14px] font-normal leading-5 text-white"
                  key={message.id}
                >
                  {message.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  if (isMyMessage) {
    return (
      <div className="mb-2 flex flex-col gap-3">
        <div className="mb-2 flex flex-row gap-3">
          <Avatar size="40" userPic={messages[0].senderAvatar} />
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
              <p className="text-[14px] font-bold leading-5 text-white">
                {messages[0].senderName}
              </p>
              <span className="text-secondary text-xs font-medium leading-5">
                ·
              </span>
              <p className="text-secondary text-xs font-medium leading-5">
                {formatTime(messages[0].createdAt)}
              </p>
            </div>
            {messages.map((message) => {
              return (
                <p
                  className="text-wrap break-all rounded-lg text-[14px] font-normal leading-5 text-white"
                  key={message.id}
                >
                  {message.text}
                </p>
              );
            })}
          </div>
        </div>
        {messages[messages.length - 1].isRead ? (
          <div className="self-end">
            <Avatar size="16" userPic={recieverPic} />
          </div>
        ) : null}
      </div>
    );
  }
}
