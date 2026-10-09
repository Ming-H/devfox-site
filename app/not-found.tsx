import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <span className="eyebrow">404 — NOT FOUND</span>
      <h1
        className="mt-6"
        style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.2 }}
      >
        这一页还没被做出来。
      </h1>
      <p className="mt-5 max-w-[480px] text-[15px]" style={{ color: "var(--ink-sub)" }}>
        起于自用，成于开放——但这一件还没起。回首页看看正在运转的东西。
      </p>
      <Link
        href="/"
        className="mt-9 inline-block w-fit rounded-full px-[26px] py-[13px] text-sm no-underline"
        style={{ background: "var(--ink)", color: "#fbfaf8" }}
      >
        返回首页 ↓
      </Link>
    </div>
  );
}
