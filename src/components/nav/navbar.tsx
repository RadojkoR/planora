"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png"
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

export default function NavBar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="h-full w-44  xxs:w-64 xs:w-70 sm:w-80">
          <Link href="/" className="">
            <Image
              className="h-full w-full"
              src={logoImg}
              alt="Planora hub Logo"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Početna
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-blue-600">
            Prijavi se
          </Link>
          <Link
            href="/sign-up"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Registruj se
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* {mobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">
            Početna
          </Link>
          <Link
            href="/login"
            className="block text-gray-700 hover:text-blue-600"
          >
            Prijavi se
          </Link>
          <Link
            href="/register"
            className="block text-gray-700 hover:text-blue-600"
          >
            Registruj se
          </Link>
        </div>
      )} */}
    </nav>
  );
}
