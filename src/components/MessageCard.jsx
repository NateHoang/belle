export default function MessageCard({ name, message }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 text-center w-64">
      <p className="italic text-gray-700 mb-3">"{message}"</p>
      <p className="font-semibold text-pink-600">— {name}</p>
    </div>
  );
}
