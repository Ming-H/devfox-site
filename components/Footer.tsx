import { site } from "@/lib/products";

export function Footer() {
  return (
    <footer style={{ background: "var(--footer-bg)", color: "var(--footer-ink)" }}>
      <div className="wrap pb-11 pt-24">
        <p
          className="fade-up"
          style={{
            fontFamily: "var(--font-en-serif)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(34px, 3.8vw, 52px)",
            lineHeight: 1.2,
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
          <div className="flex gap-7">
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
              href={site.insights}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
              style={{ fontFamily: "var(--font-mono)", fontSize: "12.5px", color: "var(--footer-sub)" }}
            >
              AI INSIGHTS ↗
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
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--footer-faint)" }}>
            © 2026 DEVFOX · DEVFOXAI.CN
          </div>
        </div>
      </div>
    </footer>
  );
}
