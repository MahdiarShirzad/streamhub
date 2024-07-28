import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className=" px-2 py-6">
      <Image className=" " src={logo} alt="logo" />
    </div>
  );
}
