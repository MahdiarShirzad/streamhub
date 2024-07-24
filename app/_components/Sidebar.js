"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  {
    link: "/",
    label: "Home",
    icon: (
      <svg
        className="w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 22L2 22"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M4 22V9.5"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M20 9.5V13.5M20 22V17.5"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
          stroke="#fff"
          strokeWidth="1.5"
        ></path>
      </svg>
    ),
  },
  {
    link: "/music",
    label: "Music",
    icon: (
      <svg
        className="w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19Z"
          stroke="#fff"
          strokeWidth="1.5"
        ></path>
        <path
          d="M21 17C21 18.6569 19.6569 20 18 20C16.3431 20 15 18.6569 15 17C15 15.3431 16.3431 14 18 14C19.6569 14 21 15.3431 21 17Z"
          stroke="#fff"
          strokeWidth="1.5"
        ></path>
        <path d="M9 19V8" stroke="#fff" strokeWidth="1.5"></path>
        <path
          d="M20.25 11.5C20.25 11.9142 20.5858 12.25 21 12.25C21.4142 12.25 21.75 11.9142 21.75 11.5H20.25ZM21.75 11.5V6H20.25V11.5H21.75Z"
          fill="#fff"
        ></path>
        <path
          d="M15.7351 3.75466L11.7351 5.08799C10.4151 5.52801 9.75503 5.74801 9.37752 6.27179C9 6.79556 9 7.49128 9 8.88273V11.9997L21 7.99969V7.54939C21 5.01693 21 3.7507 20.1694 3.15206C19.3388 2.55341 18.1376 2.95383 15.7351 3.75466Z"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
      </svg>
    ),
  },
  {
    link: "/albums",
    label: "Albums",
    icon: (
      <svg
        className="w-6"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
      >
        <path
          fill="var(--ci-primary-color, #fff)"
          d="M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z"
          className="ci-primary"
        ></path>
        <path
          fill="var(--ci-primary-color, #fff)"
          d="M256,152A104,104,0,1,0,360,256,104.118,104.118,0,0,0,256,152Zm0,176a72,72,0,1,1,72-72A72.081,72.081,0,0,1,256,328Z"
          className="ci-primary"
        ></path>
        <rect
          width="32"
          height="32"
          x="240"
          y="240"
          fill="var(--ci-primary-color, #fff)"
          className="ci-primary"
        ></rect>
        <path
          fill="var(--ci-primary-color, #fff)"
          d="M256,112V80a174.144,174.144,0,0,0-79.968,19.178A177.573,177.573,0,0,0,115.2,150.39l25.586,19.219A142.923,142.923,0,0,1,256,112Z"
          className="ci-primary"
        ></path>
      </svg>
    ),
  },
  {
    link: "/artists",
    label: "Artists",
    icon: (
      <svg
        className="w-6"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
      >
        <path
          fill="#fff"
          d="M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
        ></path>
      </svg>
    ),
  },
];

const Sidebar = () => {
  const router = usePathname();

  return (
    <div className="w-80 h-[100vh] bg-[#1D1E22] text-white flex flex-col">
      {sidebarLinks.map((link) => (
        <Link
          href={link.link}
          key={link.label}
          className={`sidebar-link rounded-md flex items-center mb-2 my-3 py-2 px-4 text-base border-l-4 border-l-transparent hover:border-l-4 hover:border-l-purple-900 ${
            router === link.link ? "active" : ""
          }`}
        >
          {link.icon}
          <p className="ml-2">{link.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
