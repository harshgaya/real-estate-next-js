export default function NavItem({ name }) {
  return (
    <div className="relative group">
      <a className="text-sm font-inter" href={"/"}>
        {name}
      </a>

      <div className="absolute bottom-[-5px] left-1/2  -translate-x-1/2 w-0 h-[8px] transition-all rounded-full group-hover:w-[8px] bg-red-400"></div>
    </div>
  );
}
