export default function ButtonBorder({ children, isActive }) {
  return (
    <button
      className={`py-2 px-4 text-[10px] md:text-xl md:py-3 md:px-8 border ${
        !isActive ? "border-customBorderColor" : "border-customOrange"
      }  rounded-md ${
        isActive ? "text-customOrange" : "text-white border-opacity-35"
      }`}
    >
      {children}
    </button>
  );
}
