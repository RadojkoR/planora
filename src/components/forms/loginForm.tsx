"use client";

import { loginFormAction } from "@/lib/authAction";


// import { loginFormAction } from "@/lib/authAction";

export default function LoginForm() {

  

  return (
    
    <form action={loginFormAction} className="space-y-4">
           
    
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lozinka
              </label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
               Login
            </button>
          </form>
  );
}
