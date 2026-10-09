import Link from "next/link";
import { site } from "@/lib/products";

export function Navbar() {
  return (
    <header className="border-b" style={{ borderColor: "var(--line)" }}>
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="no-underline"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 20 }}
        >
          DEVFOX<span style={{ color: "var(--accent)" }}>.</span>
        </Link>
        <nav className="flex items-center gap-6 md:gap-9">
          <Link href="/#products" className="text-sm no-underline" style={{ color: "var(--ink-sub)" }}>
            产品
          </Link>
          <Link href="/about" className="text-sm no-underline" style={{ color: "var(--ink-sub)" }}>
            关于
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm no-underline"
            style={{ color: "var(--ink-sub)" }}
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
