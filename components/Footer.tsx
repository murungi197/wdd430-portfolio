import { connection } from "next/server";
import { Suspense } from "react";
import Link from "next/link";

async function CopyrightNotice() {
  await connection();

  return (
    <p>
      Copyright © {new Date().getFullYear()} | WDD 430 Student Developer |
      All rights reserved
    </p>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Suspense fallback={<p>WDD 430 · Student developer portfolio</p>}>
          <CopyrightNotice />
        </Suspense>
        <Link href="/">Back to top ↑</Link>
      </div>
    </footer>
  );
}
