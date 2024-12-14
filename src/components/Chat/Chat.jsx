import ChatHeader from "./ChatHeader";
import ChatMain from "./ChatMain";
import ChatInput from "./ChatInput";

export default function Chat() {
  return (
    <div className="bg-chat fixed bottom-3 right-3 w-[400px] rounded-lg overflow-hidden">
      <ChatHeader />
      <ChatMain />
      <ChatInput />
    </div>
  );
}
