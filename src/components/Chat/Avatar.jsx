import statusSvg from "../../assets/status.svg";

export default function Avatar({ size, userPic, status }) {
  return (
    <div
      className="relative"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="bg-avatar rounded-full"
      ></div>
      <img
        className="absolute inset-0 rounded-full"
        src={userPic}
        alt={userPic}
      />
      {status === "online" ? (
        <img
          className="absolute bottom-0 right-0"
          src={statusSvg}
          alt="User status"
        />
      ) : null}
    </div>
  );
}
