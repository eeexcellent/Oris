import sendIcon from "../../assets/sendIcon.svg";

export default function ChatInput() {
  return (
    <div id="chat-input" className="flex h-14 gap-2 p-2">
      <input
        className="bg-input-500 focus:bg-input-400 hover:bg-input-400 grow rounded-md px-3 py-[10px] text-sm text-white outline-none transition-colors duration-300 ease-in-out"
        type="text"
        placeholder="Write your message..."
      />
      <button className="flex items-center gap-2 rounded-3xl bg-purple-600 px-3 py-1.5 font-bold text-white transition-all duration-300 ease-in-out hover:rounded-md hover:bg-purple-500">
        <img src={sendIcon} /> Send
      </button>
    </div>
  );
}
