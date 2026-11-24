import Link from "next/link";
import { Suspense } from "react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

function AuthControls() {
  return (
    <Show when="signed-out">
      <SignInButton mode="modal" />
      <SignUpButton mode="modal" />
    </Show>
  );
}

function SignedInControls() {
  return (
    <Show when="signed-in">
      <UserButton />
    </Show>
  );
}

export default function Header() {
  return (
    <header className="border-b border-[#e2e8e2] bg-[#f7f8f6]">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1120px] items-center justify-between px-6">
        <Link className="brand name" href="/" aria-label="Murungi Innocent">
          <span className="brand-mark" aria-hidden="true">
            MI
          </span>
          <span>MURUNGI INNOCENT</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-2 text-[11px] font-semibold text-[#64736a] sm:gap-4 sm:text-[13px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/open-source">Open source</Link>
            </li>
            <li>
              <Link href="/school-projects">School</Link>
            </li>
            <li>
              <Suspense>
                <AuthControls />
                <SignedInControls />
              </Suspense>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
