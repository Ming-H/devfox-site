import { site } from "@/lib/products";

export function Ticker() {
  return (
    <div className="border-b" style={{ background: "var(--bg-2)", borderColor: "var(--line)" }}>
      <div className="wrap flex h-[68px] items-center gap-7">
        <span className="eyebrow whitespace-nowrap" style={{ color: "var(--ink)" }}>
          正在做
        </span>
        <span className="flex-1 truncate text-[13.5px]" style={{ color: "var(--ink-sub)" }}>
          <b style={{ color: "var(--ink)", fontWeight: 600 }}>{site.nowBuilding.name}</b> ·{" "}
          {site.nowBuilding.msg}{" "}
          <span className="live-dot" style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ok)" }}>
            ● live
          </span>
        </span>
        <span className="whitespace-nowrap" style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-faint)" }}>
          {site.updated}
        </span>
      </div>
    </div>
  );
}
