export default function Button({children, onClick}){
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}