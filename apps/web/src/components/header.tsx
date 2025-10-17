"use client";

import { UserButton, SignedIn, SignedOut } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header>
      <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between px-2">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-semibold text-lg">
            Better Auth
          </Link>
          
          <SignedIn>
            <nav className="flex items-center gap-6 text-sm">
            </nav>
          </SignedIn>
        </div>

        <div className="flex items-center gap-6">
          <SignedIn>
            <UserButton size="icon" />
          </SignedIn>
          
          <SignedOut>
            <Link href="/auth/sign-in" className="text-sm">
              Sign In
            </Link>
            <Link href="/auth/sign-up" className="text-sm">
              Sign Up
            </Link>
          </SignedOut>
          
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
