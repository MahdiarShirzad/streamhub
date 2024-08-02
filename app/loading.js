import React from "react";
import Spinner from "./_components/Spinner";

export default function Loading() {
  return (
    <div className="min-h-[700px] flex items-center justify-center">
      <Spinner />
    </div>
  );
}
