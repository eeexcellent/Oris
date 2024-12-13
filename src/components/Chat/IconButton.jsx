export default function IconButton({ icon, ...props }) {
  return (
    <button className="size-8">
      <img className="mx-auto" src={icon} {...props} />
    </button>
  );
}
