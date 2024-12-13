import ChatHeader from "./ChatHeader";
import ChatMain from "./ChatMain";

export default function Chat() {
  return (
    <div className="bg-chat fixed bottom-3 right-3 h-[400px] w-80 rounded-lg">
      <ChatHeader />
      <ChatMain />
    </div>
  );
}
