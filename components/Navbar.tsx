import Link from "next/link";
import { site } from "@/lib/products";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <header className="no-print border-b" style={{ borderColor: "var(--line)" }}>
      <div className="wrap flex h-[68px] items-center justify-between">
        <Link
          href="/"
          className="display no-underline"
          style={{ fontSize: 19, color: "var(--ink)" }}
        >
          devfox<span className="blink-caret" style={{ color: "var(--accent)" }}>_</span>
        </Link>
        <nav className="flex items-center gap-5 md:gap-7">
          <Link href="/#products" className="text-sm no-underline" style={{ color: "var(--ink-sub)" }}>
            产品
          </Link>
          <Link href="/writing" className="text-sm no-underline" style={{ color: "var(--ink-sub)" }}>
            文章
          </Link>
          <Link href="/now" className="hidden text-sm no-underline sm:inline" style={{ color: "var(--ink-sub)" }}>
            Now
          </Link>
          <Link href="/about" className="text-sm no-underline" style={{ color: "var(--ink-sub)" }}>
            关于
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm no-underline md:inline"
            style={{ color: "var(--ink-sub)" }}
          >
            GitHub ↗
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
