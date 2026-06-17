import Sidebar from "../components/Sidebar";
import LoanTable from "../components/LoanTable";
import { useSelector } from "react-redux";

function Loans() {
  const loans = useSelector(
    (state) => state.loan.loans
  );

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          All Loans
        </h1>

        <LoanTable loans={loans} />
      </div>
    </div>
  );
}

export default Loans;