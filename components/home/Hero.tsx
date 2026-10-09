import { site } from "@/lib/products";

export function Hero() {
  return (
    <section className="border-b" style={{ borderColor: "var(--line)" }}>
      <div className="wrap relative grid grid-cols-1 pb-[104px] pt-[120px] lg:grid-cols-[1fr_300px]">
        {/* 主区与注释栏之间的垂直发丝线 */}
        <div
          aria-hidden
          className="absolute bottom-0 right-[348px] top-[72px] hidden w-px lg:block"
          style={{ background: "var(--line)" }}
        />
        <div className="pr-0 lg:pr-[72px]">
          <span className="eyebrow mb-9 block">{site.name} 的独立产品工作室</span>
          <h1
            className="fade-up"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              fontSize: "clamp(48px, 6.4vw, 84px)",
              lineHeight: 1.18,
            }}
          >
            {site.tagline[0]}
            <span className="block" style={{ marginLeft: "clamp(24px, 6vw, 96px)", color: "var(--accent)" }}>
              {site.tagline[1]}
            </span>
          </h1>
          <p className="tw-pretty mt-9 max-w-[560px] text-[16.5px]" style={{ color: "var(--ink-sub)" }}>
            {site.heroSub}
          </p>
          <a
            href="#products"
            className="mt-11 inline-block rounded-full px-[26px] py-[13px] text-sm no-underline"
            style={{ background: "var(--ink)", color: "#fbfaf8" }}
          >
            看看正在做什么 ↓
          </a>
        </div>
        <aside className="hidden flex-col justify-end pl-11 text-[13.5px] lg:flex" style={{ color: "var(--ink-sub)" }}>
          <span className="mb-[18px] block h-px w-10" style={{ background: "var(--ink)" }} />
          <span>{site.asideNote}</span>
          <em
            className="mt-[14px] block"
            style={{ fontFamily: "var(--font-en-serif)", fontStyle: "italic", fontSize: 17, color: "var(--accent)", lineHeight: 1.5 }}
          >
            {site.asideQuote[0]}
            <br />
            {site.asideQuote[1]}
          </em>
        </aside>
      </div>
    </section>
  );
}
