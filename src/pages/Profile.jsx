import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-4 md:p-8">
        <Navbar setSearchTerm={() => {}} />

        <h1 className="text-4xl font-bold mb-8">
          Profile
        </h1>

        <div className="bg-white p-8 rounded-xl shadow max-w-2xl">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-slate-800 text-white flex items-center justify-center text-3xl font-bold">
              A
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Anmol Prajapati
              </h2>

              <p className="text-gray-600">
                FinTech Loan Management User
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="font-semibold">
                Email
              </p>
              <p className="text-gray-600">
                anmol@example.com
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="font-semibold">
                Role
              </p>
              <p className="text-gray-600">
                Admin
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="font-semibold">
                Account Status
              </p>
              <p className="text-green-600">
                Active
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="font-semibold">
                Access Type
              </p>
              <p className="text-gray-600">
                JWT Authenticated
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-slate-900 text-white px-6 py-3 rounded-lg">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;