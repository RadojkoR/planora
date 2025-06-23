"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png"
import { SignUpBtn } from "@/components";
import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";

export default function NavBar() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handlePageScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handlePageScroll);
    return () => window.removeEventListener("scroll", handlePageScroll);
  }, []);

  return (
    <nav className={`mainNav ${hasScrolled ? "bg-white" : ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="h-full w-32  xxs:w-64 xs:w-70 sm:w-80">
          <Link href="/" className="">
            <Image
              className="h-full w-full"
              src={logoImg}
              alt="Planora hub Logo"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="flex space-x-6 items-center">
          {/* <Link
            href="/"
            className="text-gray-700 hover:text-primary font-[600]"
          >
            Početna
          </Link> */}
          <Link
            href="/login"
            className="text-gray-700 text-sm sm:text-base hover:text-primary font-[600]"
          >
            Prijavi se
          </Link>

          <SignUpBtn />
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
        <div className="md:hidden bg-gray-100 w-1/4 absolute right-0 mt-2 space-y-2 p-5">
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
