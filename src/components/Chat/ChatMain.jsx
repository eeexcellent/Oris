import MessageList from "./MessageList";

import { messages } from "../../messages";

export default function ChatMain() {
  // group messages by sender and time difference no longer than 5 minutes
  const messageGroups = messages.reduce((groups, message, index) => {
    const { senderId, createdAt } = message;

    const currentTime = new Date(createdAt);

    if (index === 0) {
      groups.push({
        senderId,
        messages: [message],
        lastTimestamp: currentTime,
      });
      return groups;
    }

    const lastGroup = groups[groups.length - 1];
    const timeDifference = (currentTime - lastGroup.lastTimestamp) / 60000;

    if (timeDifference > 5 || lastGroup.senderId !== senderId) {
      groups.push({
        senderId,
        messages: [message],
        lastTimestamp: currentTime,
      });
    } else {
      lastGroup.messages.push(message);
      lastGroup.lastTimestamp = currentTime;
    }

    return groups;
  }, []);

  return (
    <div
      id="chat-main"
      className="custom-scrollbar h-96 overflow-y-auto px-2 pt-4"
    >
      {messageGroups.map((messageGroup, index) => (
        <MessageList
          key={`${messageGroup.senderId}-${index}`}
          messages={messageGroup.messages}
        />
      ))}
    </div>
  );
}
