import { site } from "@/lib/products";

export function Footer() {
  return (
    <footer className="no-print" style={{ background: "var(--footer-bg)", color: "var(--footer-ink)" }}>
      <div className="wrap pb-11 pt-24">
        <p
          className="display fade-up"
          style={{
            fontSize: "clamp(30px, 3.4vw, 46px)",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            color: "#f5f2ec",
          }}
        >
          {site.footerQuote[0]}
          <span className="block" style={{ marginLeft: 56, color: "var(--footer-accent)" }}>
            {site.footerQuote[1]}
          </span>
        </p>
        <div
          className="mt-[92px] flex flex-wrap items-center justify-between gap-4 pt-7"
          style={{ borderTop: "1px solid var(--footer-line)" }}
        >
          <div className="flex flex-wrap gap-7">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
              style={{ fontFamily: "var(--font-mono)", fontSize: "12.5px", color: "var(--footer-sub)" }}
            >
              GITHUB ↗
            </a>
            <a
              href={site.x}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
              style={{ fontFamily: "var(--font-mono)", fontSize: "12.5px", color: "var(--footer-sub)" }}
            >
              X ↗
            </a>
            <a
              href={site.insights}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
              style={{ fontFamily: "var(--font-mono)", fontSize: "12.5px", color: "var(--footer-sub)" }}
            >
              AI INSIGHTS ↗
            </a>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12.5px", color: "var(--footer-sub)" }}>
              公众号 · 极客狐DevFox
            </span>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--footer-faint)" }}>
            © 2026 DEVFOX · DEVFOXAI.CN
          </div>
        </div>
      </div>
    </footer>
  );
}
