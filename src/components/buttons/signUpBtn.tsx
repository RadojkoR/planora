import Link from "next/link";

export default function SignUpBtn() {
    return (
      <Link
        href="/sign-up"
        className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-primary text-white rounded hover:bg-secondary transition-all duration-300 ease-in-out"
      >
        Registruj se
      </Link>
    );
}


