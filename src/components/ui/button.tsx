export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}