import Image from "next/image";
import React from "react";

export default function MusicCard({ music, isPlaying, onPlay }) {
  return (
    <div className="flex text-gray-200 justify-between items-center shadow-sm shadow-gray-800 w-full px-2 py-1 rounded-lg">
      <div className="relative h-16 w-16">
        <Image
          fill
          src={music.poster}
          alt={music.name}
          className="rounded-lg"
        />
      </div>
      <div className="ml-2 flex flex-col gap-1 w-64 items-start justify-center">
        <h1 className="font-semibold">{music.name}</h1>
        <h4 className="text-xs text-gray-400 text-left w-full">
          {music.artist}
        </h4>
      </div>
      <div className="flex w-24 justify-between items-center ">
        <button>
          <svg
            className="w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.78799 3H14.212C15.0305 2.99999 15.7061 2.99998 16.2561 3.04565C16.8274 3.0931 17.3523 3.19496 17.8439 3.45035C18.5745 3.82985 19.1702 4.42553 19.5497 5.1561C19.805 5.64774 19.9069 6.17258 19.9544 6.74393C20 7.29393 20 7.96946 20 8.78798V17.6227C20 18.5855 20 19.3755 19.9473 19.9759C19.8975 20.5418 19.7878 21.2088 19.348 21.6916C18.8075 22.2847 18.0153 22.5824 17.218 22.4919C16.5691 22.4182 16.0473 21.9884 15.6372 21.5953C15.2022 21.1783 14.6819 20.5837 14.0479 19.8591L13.6707 19.428C13.2362 18.9314 12.9521 18.6081 12.7167 18.3821C12.4887 18.1631 12.3806 18.1107 12.3262 18.0919C12.1148 18.019 11.8852 18.019 11.6738 18.0919C11.6194 18.1107 11.5113 18.1631 11.2833 18.3821C11.0479 18.6081 10.7638 18.9314 10.3293 19.428L9.95209 19.8591C9.31809 20.5837 8.79784 21.1782 8.36276 21.5953C7.95272 21.9884 7.43089 22.4182 6.78196 22.4919C5.9847 22.5824 5.19246 22.2847 4.65205 21.6916C4.21218 21.2088 4.10248 20.5418 4.05275 19.9759C3.99997 19.3755 3.99998 18.5855 4 17.6227V8.78799C3.99999 7.96947 3.99998 7.29393 4.04565 6.74393C4.0931 6.17258 4.19496 5.64774 4.45035 5.1561C4.82985 4.42553 5.42553 3.82985 6.1561 3.45035C6.64774 3.19496 7.17258 3.0931 7.74393 3.04565C8.29393 2.99998 8.96947 2.99999 9.78799 3ZM7.90945 5.03879C7.46401 5.07578 7.23663 5.1428 7.07805 5.22517C6.71277 5.41493 6.41493 5.71277 6.22517 6.07805C6.1428 6.23663 6.07578 6.46401 6.03879 6.90945C6.0008 7.36686 6 7.95898 6 8.83V17.5726C6 18.5978 6.00094 19.2988 6.04506 19.8008C6.08138 20.2139 6.13928 20.3436 6.14447 20.3594C6.2472 20.4633 6.39033 20.5171 6.53606 20.5065C6.55034 20.4981 6.67936 20.4386 6.97871 20.1516C7.34245 19.8029 7.80478 19.2759 8.4799 18.5044L8.85192 18.0792C9.25094 17.6232 9.59229 17.233 9.89819 16.9393C10.2186 16.6317 10.5732 16.3559 11.0214 16.2013C11.6555 15.9825 12.3445 15.9825 12.9786 16.2013C13.4268 16.3559 13.7814 16.6317 14.1018 16.9393C14.4077 17.233 14.7491 17.6232 15.1481 18.0792L15.5201 18.5044C16.1952 19.2759 16.6576 19.8029 17.0213 20.1516C17.3206 20.4386 17.4497 20.4981 17.4639 20.5065C17.6097 20.5171 17.7528 20.4633 17.8555 20.3594C17.8607 20.3436 17.9186 20.2139 17.9549 19.8008C17.9991 19.2988 18 18.5978 18 17.5726V8.83C18 7.95898 17.9992 7.36686 17.9612 6.90945C17.9242 6.46401 17.8572 6.23663 17.7748 6.07805C17.5851 5.71277 17.2872 5.41493 16.9219 5.22517C16.7634 5.1428 16.536 5.07578 16.0905 5.03879C15.6331 5.0008 15.041 5 14.17 5H9.83C8.95898 5 8.36686 5.0008 7.90945 5.03879Z"
                fill="#fff"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button className="">
          <svg
            className="w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={() => onPlay(music.link)}
          className=" bg-golden text-white rounded-full w-7 h-7 flex items-center justify-center p-1"
        >
          {isPlaying ? (
            <svg
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6"
            >
              <path
                d="M10 6.42004C10 4.76319 8.65685 3.42004 7 3.42004C5.34315 3.42004 4 4.76319 4 6.42004V18.42C4 20.0769 5.34315 21.42 7 21.42C8.65685 21.42 10 20.0769 10 18.42V6.42004Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 6.42004C20 4.76319 18.6569 3.42004 17 3.42004C15.3431 3.42004 14 4.76319 14 6.42004V18.42C14 20.0769 15.3431 21.42 17 21.42C18.6569 21.42 20 20.0769 20 18.42V6.42004Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6"
            >
              <path
                d="M7.98047 3.51001C5.43047 4.39001 4.98047 9.09992 4.98047 12.4099C4.98047 15.7199 5.41047 20.4099 7.98047 21.3199C10.6905 22.2499 18.9805 16.1599 18.9805 12.4099C18.9805 8.65991 10.6905 2.58001 7.98047 3.51001Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
