function StatCard({ title, total }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col justify-between">
      <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">{title}</h3>
      <p className="text-3xl font-bold text-gray-800 mt-2">{total}</p>
    </div>
  );
}

export default StatCard;