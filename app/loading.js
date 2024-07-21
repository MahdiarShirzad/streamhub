import Image from "next/image";
import React from "react";

import spinner from "@/public/spinner.gif";

export default function Loading() {
  return (
    <div>
      <Image src={spinner} alt="spinner" />
      <p className="text-white">loading ...</p>
    </div>
  );
}
