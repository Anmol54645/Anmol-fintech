import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import LoanTable from "../components/LoanTable";
import LoanChart from "../components/LoanChart";

import API from "../api/loanApi";

function Dashboard() {
  const [loans, setLoans] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchLoans();

    const interval = setInterval(
      fetchLoans,
      2000
    );

    return () => clearInterval(interval);
  }, []);

  const fetchLoans = async () => {
    try {
      const response = await API.get("/loans/");
      setLoans(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredLoans = loans.filter((loan) =>
    loan.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const approvedLoans = loans.filter(
    (loan) => loan.status === "Approved"
  ).length;

  const pendingLoans = loans.filter(
    (loan) => loan.status === "Pending"
  ).length;

  const rejectedLoans = loans.filter(
    (loan) => loan.status === "Rejected"
  ).length;

  return (
    <div className="flex bg-slate-100 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <Sidebar />

      <div className="flex-1 p-4 md:p-8">
        <Navbar setSearchTerm={setSearchTerm} />

        <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Loans"
            value={loans.length}
          />

          <StatCard
            title="Approved"
            value={approvedLoans}
          />

          <StatCard
            title="Pending"
            value={pendingLoans}
          />

          <StatCard
            title="Rejected"
            value={rejectedLoans}
          />
        </div>

        <LoanTable loans={filteredLoans} />

        <LoanChart loans={loans} />
      </div>
    </div>
  );
}

export default Dashboard;