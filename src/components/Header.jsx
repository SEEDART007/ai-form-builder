"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="">
      <div className="p-4 shadow-md border-b flex items-center justify-between  ">
        <Image src={"/logo.svg"} alt="logo" height={100} width={100} />
        <div className="flex items-center justify-center gap-5">
          {isSignedIn ? (
            <Link href={'/dashboard'}>
            <Button className="bg-red-500 text-black hover:bg-red-300 ">
              Dashboard
            </Button></Link>
          ) : (
            <SignInButton>
              <Button className="bg-red-400 text-white" variant="primary">
                Get Started
              </Button>
            </SignInButton>
          )}
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
