export default function IconButton({ icon, ...props }) {
  return (
    <button className="size-8 hover:bg-neutral-700 transition-colors duration-300 ease-in-out rounded-full">
      <img className="mx-auto" src={icon} {...props} />
    </button>
  );
}
