"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

type Props = {};

const Navbar = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
    document.body.style.overflow = isNavOpen ? "auto" : "hidden"; // Disable/Enable scrolling
  };

  const closeMenu = () => {
    setIsNavOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  return (
    <nav className="lg:px-20 md:px-10 px-5 md:py-5 py-3.5 flex items-center justify-between sticky top-0 z-50 bg-dark/90">
      {/* Logo */}
      <Link href={"/"} className="flex gap-2 justify-center items-center z-50">
        <Image
          src={"/images/logo_only-removebg-preview.png"}
          alt="Alex Web Tech"
          height={500}
          width={500}
          className="h-10 w-10"
        />

        <span className="md:text-xl text-lg text white font-black">
          ALEX WEB TECH
        </span>
      </Link>

      {/* Nav - Large Screen */}
      <div className="md:flex gap-x-10 hidden">
        <Link
          href={"/#why"}
          className="hover:underline decoration-primary transform transition-transform duration-300 hover:scale-105"
        >
          Why Us?
        </Link>

        {/* <Link
          href={"portfolio"}
          className="hover:underline decoration-primary transform transition-transform duration-300 hover:scale-105"
        >
          Portfolio
        </Link> */}

        <Link
          href={"contact"}
          className="hover:underline decoration-primary transform transition-transform duration-300 hover:scale-105"
        >
          Contact Us
        </Link>
      </div>

      {/* Nav - Small Screen */}
      {isNavOpen ? (
        <IoCloseCircle
          className="text-white text-xl block md:hidden"
          onClick={toggleMenu}
        />
      ) : (
        <FaHamburger
          className="text-white text-xl block md:hidden"
          onClick={toggleMenu}
        />
      )}

      {isNavOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
          onClick={closeMenu}
        >
          <div
            className={`fixed inset-0 flex items-center justify-center z-50 transition-transform duration-300 ease-in-out ${
              isNavOpen ? "scale-100" : "scale-0"
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out flex flex-col gap-5 w-3/4 text-center">
              <Link
                href={"/#why"}
                className="underline text-black decoration-primary transform transition-transform duration-300 hover:scale-105"
              >
                Why Us?
              </Link>

              {/* <Link
                href={"portfolio"}
                className="underline text-black decoration-primary transform transition-transform duration-300 hover:scale-105"
              >
                Portfolio
              </Link> */}

              <Link
                href={"contact"}
                className="underline text-black decoration-primary transform transition-transform duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
