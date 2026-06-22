import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Sidebar() {
  const role = localStorage.getItem("role");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    localStorage.setItem(
      "theme",
      newTheme ? "dark" : "light"
    );
  };

  return (
    <div
      className="
      w-64
      h-screen
      bg-slate-900
      text-white
      p-6
      flex
      flex-col
      justify-between
    "
    >
      <div>
        <h1 className="text-3xl font-bold mb-10">
          Anmol FinTech
        </h1>

        <ul className="space-y-6">
          <li>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/loans">
              Loans
            </Link>
          </li>

          <li>
            <Link to="/apply-loan">
              Apply Loan
            </Link>
          </li>

          <li>
            <Link to="/profile">
              Profile
            </Link>
          </li>

          <li>
            <Link to="/emi-calculator">
              EMI Calculator
            </Link>
          </li>

          {role === "admin" && (
            <li>
              <Link to="/admin">
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>

      <button
        onClick={toggleTheme}
        className="
          bg-slate-700
          hover:bg-slate-600
          px-4
          py-2
          rounded-lg
          mt-6
        "
      >
        {darkMode
          ? "☀️ Light Mode"
          : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default Sidebar;