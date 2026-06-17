import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Loans from "./pages/Loans";
import Login from "./pages/Login";
import ApplyLoan from "./pages/ApplyLoan";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Routes>
     <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/loans"
  element={
    <ProtectedRoute>
      <Loans />
    </ProtectedRoute>
  }
/>

<Route
  path="/apply-loan"
  element={
    <ProtectedRoute>
      <ApplyLoan />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>

<Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;