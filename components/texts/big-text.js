export default function BigText({ children }) {
  return (
    <h1 className="absolute z-20 font-monte text-2xl md:text-6xl top-1/2 left-5 md:left-10 text-white font-bold leading-tight">
      {children}
    </h1>
  );
}
