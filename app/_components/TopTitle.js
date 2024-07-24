import React from "react";

export default function TopTitle({ title }) {
  return (
    <p className="text-3xl font-bold text-white my-2 mb-7">
      Top <span className="text-purple-500">{title}</span>
    </p>
  );
}
