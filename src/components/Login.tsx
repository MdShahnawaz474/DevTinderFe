import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import {
  Heart,
  Mail,
  Lock,
  ArrowRight,
  LaptopIcon,
  CodeXml,
  Code,
  Terminal,
  Braces,
  LogIn,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { FormData } from "../types/Types";
import { loginUser } from "../services/AuthService";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormData>({
    email: "shahnawaz@gmail.com",
    password: "Shahnawaz@474",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await loginUser({
        emailId: formData.email,
        password: formData.password,
      });

      console.log("Login API response:",result);

      if (result.success) {

       dispatch(addUser(result.safeUser));
        navigate("/feed");
      } else {
        setError(result.message || "Login failed. Please try again.");
      }
    } catch (err:any) {
      setError(err.message||"Failed to connect to the server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center xl:fixed lg:fixed items-center w-full min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="w-full max-w-md px-4">
        <div className="card bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-blue-500">
          <div className="p-8">
            <div className="flex justify-center mb-3">
              <div className="flex items-center gap-2">
                <Code className="text-blue-500" size={28} />
                <h1 className="text-3xl font-bold text-blue-400">DevTinder</h1>
                <CodeXml className="text-blue-500" size={28} />
              </div>
            </div>

            <h2 className="  text-pink-400 text-sm italic mt-2 mb-2 text-center">
              {" "}
              {"</>"} Where your heart finds a merge request 💖
            </h2>

            <div className="text-center text-gray-400 mb-5">
             <p> Sign in to connect with your coding soulmates</p>
              <p className="text-red-500 mt-1">{error}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-control">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail size={18} className="text-gray-500" />
                  </div>
                  <input
                    value={formData.email}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full py-3 pl-10 pr-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock size={18} className="text-gray-500" />
                  </div>
                  <input
                    value={formData.password}
                    type="password"
                    placeholder="••••••••"
                    className="w-full py-3 pl-10 pr-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-300"
                  >
                    Cache session
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-400 hover:text-blue-300"
                  >
                    Reset password
                  </a>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isLoading ? (
                  "Authenticating..."
                ) : (
                  <>
                    Login <LogIn size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Facebook
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="font-medium text-pink-600 hover:text-pink-500"
                >
                  Join DevTinder Today
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
