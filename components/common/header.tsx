import React from "react";
import { FileHeart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavLink } from "./nav-link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
export default function Header() {
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-1 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <FileHeart className="w-5 h-5 lg:w-7 lg:h-7 text-gray-900 hover:rotate-12 transform transition duration-300 ease-in-out" />
          <span className=" font-extrabold text-style-5 lg:text-xl text-gray-900">
            Summarizard
          </span>
        </NavLink>
      </div>
      <div className="flex lg:jusitify-center gap-4 lag:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/dashboard">Your Summaries</NavLink>
        </SignedIn>
      </div>
      <div className="flex lg:flex-1 justify-end gap-4 lg:gap-12">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">upload a PDF</NavLink>
            <div>Pro</div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>

        <SignedOut>
          <NavLink href="/sign-in">Sign in</NavLink>
        </SignedOut>
      </div>
    </nav>
  );
}
