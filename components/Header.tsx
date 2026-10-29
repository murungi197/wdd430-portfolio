import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-[#e2e8e2] bg-[#f7f8f6]">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1120px] items-center justify-between px-6">
        <Link className="brand" href="/" aria-label="Murungi Innocent">
          <span className="brand-mark" aria-hidden="true">
            MI
          </span>
          <span>MURUNGI INNOCENT</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-[13px] font-semibold text-[#64736a]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
