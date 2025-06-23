import { LoginForm } from "@/components";
import { Suspense } from "react";

export default function LogIn() {
  return (
    <main className="mainContainer flex-center flex-grow">
      <div className="w-full sm:w-xl max-w-xxl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Prijavi se
        </h1>

        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
