"use client";


import { loginFormAction } from "@/lib/authAction";

export default function LoginForm() {

  

  return (
    <form action={loginFormAction} className="space-y-4 max-w-md mx-auto">
      <div>
        <label>Email</label>
        <input type="email" name="email" required className="input" />
      </div>

      <div>
        <label>Lozinka</label>
        <input type="password" name="password" required className="input" />
      </div>

      <button  type="submit" className="btn-primary w-full">
        Login
      </button>
    </form>
  );
}
