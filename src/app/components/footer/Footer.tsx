import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="lg:px-20 md:px-10 px-5 md:py-5 py-3.5 flex items-center justify-between">
      {/* Logo */}
      <div className="space-y-2">
        <Link href={"/"}>
          <span className="mlg:text-5xl md:text-3xl text-lg text white font-black">
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
