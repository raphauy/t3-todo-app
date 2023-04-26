import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
  const { data: sessionData } = useSession();

  return (
    <header className="p-2 bg-[#2e026d] border-b border-b-gray-400">
      <div className="flex w-full max-w-full flex-wrap items-center justify-between px-[8%] xl:mx-auto xl:max-w-7xl">
        <Link href={"https://rapha.uy"}>
          <Image
            src="/rapha.uy_favicon_r_blanco.png"
            width={43}
            height={43}
            alt="logo"
          />
        </Link>

        <div className="flex flex-row gap-2 items-center">
          <p className="text-l text-white">
            {sessionData && <span>{sessionData.user?.email}</span>}
          </p>
          <button
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >{sessionData ? "Sign out" : "Sign in"}</button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
