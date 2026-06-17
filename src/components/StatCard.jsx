function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        {value}
      </h1>
    </div>
  );
}

export default StatCard;