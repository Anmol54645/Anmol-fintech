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
    <div className="bg-white p-6 rounded-xl shadow mt-8">
      <h2 className="text-xl font-bold mb-4">
        Loan Status Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LoanChart;