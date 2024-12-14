import { useState } from "react";
import sendIcon from "../../assets/sendIcon.svg";

export default function ChatInput() {
  const [isInputActive, setIsInputActive] = useState(false);

  function handleInputFocus() {
    setIsInputActive(true);
  }

  function handleInputBlur() {
    setIsInputActive(false);
  }

  let borderColorClass = "border-secondary";

  if (isInputActive) {
    borderColorClass = "border-purple-600";
  }

  return (
    <div
      id="chat-input"
      className={`flex h-14 gap-2 border-t-2 ${borderColorClass} p-2 transition-colors duration-300 ease-in-out`}
    >
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
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
