function StatCard({ title, value }) {
  return (
    <div
      className="
      bg-white
      dark:bg-slate-800
      text-black
      dark:text-white
      rounded-xl
      p-6
      shadow-md
      hover:shadow-xl
      transition
      duration-300
    "
    >
      <h3 className="text-gray-500 dark:text-gray-300">
        {title}
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        {value}
      </h1>
    </div>
  );
}

export default StatCard;