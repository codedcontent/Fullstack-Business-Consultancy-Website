import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="lg:px-20 md:px-10 px-5 md:py-5 py-3.5 flex lg:flex-row flex-col items-center justify-between lg:mt-40 md:mt-20 mt-10">
      {/* Logo */}
      <div className="space-y-2">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex gap-2 justify-center items-center w-max"
        >
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

        <p className="font-extralight">
          @2024 All rights reserved by Alex Web Tech
        </p>
      </div>

      {/* Social Media */}
      <div className="flex gap-5">IG</div>
    </div>
  );
};

export default Footer;
