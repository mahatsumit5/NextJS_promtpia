"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const isUserLogedIn = true;
const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/">
        <Image
          src="/assests/images/logo.svg"
          width={30}
          alt="prompt"
          className="object-contain"
          height={30}
        />
      </Link>
      {/* mobile naigation */}
      <div className="sm:flex hidden">
        {isUserLogedIn ? (
          <div>
            <Link href="/create-prompt" className="black_btn">
              {" "}
              create post
            </Link>
            <button type="button" className="outline_btn">
              <Link href="/profile">
                <Image
                  width={37}
                  height={37}
                  src="/assests/images/logo.svg"
                  alt="proile"
                />
              </Link>
              Sign out
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
