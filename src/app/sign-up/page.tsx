// src/app/sign-up/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState({ email: "", password: "", company: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Pošalji formu na backend
    console.log(form);
  };

  return (
    <main className="mainContainer flex-center flex-grow">
      <div className="w-full sm:w-xl max-w-xxl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registruj se
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ime firme
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
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
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Registruj se
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Već imaš nalog?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Prijavi se
          </Link>
        </p>
      </div>
    </main>
  );
}
