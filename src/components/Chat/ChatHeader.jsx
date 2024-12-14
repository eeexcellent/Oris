import Avatar from "./Avatar";
import IconButton from "./IconButton";

import recieverPic from "../../assets/recieverPic.png";

import closeSvg from "../../assets/close.svg";
import fullscreenSvg from "../../assets/fullscreen.svg";
import optionsSvg from "../../assets/options.svg";
import videoSvg from "../../assets/video.svg";

export default function ChatHeader() {
  return (
    <div
      id="chat-header"
      className="border-secondary container flex h-12 items-center justify-between border-b-[1px] pl-3 pr-2"
    >
      <div className="flex items-center gap-4">
        <Avatar size="32" userPic={recieverPic} status="online" />
        <div className="flex flex-col">
          <h2 className="text-[14px] font-bold leading-5 text-white">
            Me
          </h2>
          <p className="text-secondary text-xs font-medium leading-4">
            Available on mobile
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <IconButton icon={optionsSvg} alt="Chat options." />
        <IconButton icon={videoSvg} alt="Start video call." />
        <IconButton icon={fullscreenSvg} alt="Chat on fullscreen." />
        <IconButton icon={closeSvg} alt="Close chat." />
      </div>
    </div>
  );
}
