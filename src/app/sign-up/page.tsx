import { SignupForm } from "@/components";
import Link from "next/link";

export default function SignUpPage() {

  return (
    <main className="mainContainer flex-center flex-grow">
      <div className="w-full sm:w-xl max-w-xxl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registruj se
        </h1>
        <SignupForm />
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
