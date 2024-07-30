import Image from "next/image";
import React from "react";
import spinner from "../../public/spinner.gif";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center gap-1 w-full">
      <p className="text-white">loading ...</p>
      <div className=" relative w- h-">
        <Image className=" w-10 h-10" src={spinner} alt="spinner" />
      </div>
    </div>
  );
}
