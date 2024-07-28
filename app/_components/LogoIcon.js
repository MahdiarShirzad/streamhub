import React from "react";
import logo from "../../public/logo-icon.png";
import Image from "next/image";

export default function LogoIcon() {
  return (
    <div className=" relative w-14 h-14">
      <Image className=" " fill src={logo} alt="logo" />
    </div>
  );
}
