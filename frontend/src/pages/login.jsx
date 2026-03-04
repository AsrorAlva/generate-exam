import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";
import Illustration from "./illustrasion";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const defaultEmail = "user@example.com";
  const defaultPassword = "password123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === defaultEmail && password === defaultPassword) {
      localStorage.setItem("isLogin", "true");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="h-screen w-screen grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex items-center justify-center bg-indigo-500">
        <Illustration />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center bg-gray-50 px-8">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Login</h2>
            <p className="text-sm text-gray-500">Masuk ke akun anda</p>
          </div>

           {/* Error message */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded">
            {error}
          </div>
        )}


          {/* FORM */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-600">Email</label>

              <div className="flex items-center border  rounded-md px-3 mt-1 focus-within:border-blue-600">
                <Mail size={16} className="text-gray-400" />

                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 outline-none text-sm text-gray-500"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-600">Password</label>

              <div className="flex items-center border border-gray-300 rounded-md px-3 mt-1 focus-within:border-blue-600">
                <Lock size={16} className="text-gray-400" />

                <input
                  type="password"
                  placeholder="********"
                  className="w-full px-3 py-2 outline-none text-sm text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition text-sm font-medium"
            >
              <LogIn size={16} />
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
