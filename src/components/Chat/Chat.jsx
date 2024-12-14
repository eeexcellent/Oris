import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMain from "./ChatMain";

export default function Chat() {
  return (
    <div className="bg-chat shadow-outer fixed bottom-5 right-5 w-[400px] rounded-lg shadow-purple-600">
      <ChatHeader />
      <ChatMain />
      <ChatInput />
    </div>
  );
}
