import React from "react";
import Link from "next/link";

function navigationBottom() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-blue-200 dark:border-blue-100">
      <div className="grid h-full max-w-lg grid-cols-2 mx-auto">
        <Link
          href="/"
          type="button"
          className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-blue-700 group"
        >
          <svg
            className="w-5 h-5 mb-1 text-blue-500 dark:text-blue-400 group-hover:text-white dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="text-sm text-blue-500 dark:text-blue-400 group-hover:text-white dark:group-hover:text-white">
            Home
          </span>
        </Link>
        {/* <Link
          href="/profile"
          type="button"
          className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-blue-700 group"
        >
          <svg
            className="w-5 h-5 mb-1 text-blue-500 dark:text-blue-400 group-hover:text-white dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <span className="text-sm text-blue-500 dark:text-blue-400 group-hover:text-white dark:group-hover:text-white">
            Profile
          </span>
        </Link> */}
        <Link
          href="/favorite"
          type="button"
          className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-blue-700 group"
        >
          <svg
            className="w-6 h-6 mb-1 text-blue-500 dark:text-blue-400 group-hover:text-white dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="text-sm text-blue-500 dark:text-blue-400 group-hover:text-white dark:group-hover:text-white">
            Favorites
          </span>
        </Link>
      </div>
    </div>
  );
}

export default navigationBottom;
