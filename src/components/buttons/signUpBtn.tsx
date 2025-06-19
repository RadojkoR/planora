import Link from "next/link";

export default function SignUpBtn() {
    return (
      <Link
        href="/sign-up"
        className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-all duration-300 ease-in-out"
      >
        Registruj se
      </Link>
    );
}


