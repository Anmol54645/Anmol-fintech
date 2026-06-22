import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function LoanChart({ loans }) {
  const chartData = [
    {
      status: "Approved",
      count: loans.filter(
        (loan) => loan.status === "Approved"
      ).length,
    },
    {
      status: "Pending",
      count: loans.filter(
        (loan) => loan.status === "Pending"
      ).length,
    },
    {
      status: "Rejected",
      count: loans.filter(
        (loan) => loan.status === "Rejected"
      ).length,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 text-black dark:text-white p-6 rounded-xl shadow mt-8 transition duration-300">
      <h2 className="text-xl font-bold mb-4">
        Loan Status Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={chartData}>
          <XAxis
            dataKey="status"
            stroke="#94a3b8"
          />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LoanChart;