const rules = [
  {
    no: "01",
    title: "真实问题优先",
    desc: "不为演示而造。每件工具都先解决我自己的问题，再谈开放。",
  },
  {
    no: "02",
    title: "工程质量打底",
    desc: "测试、文档、可复现。开源仓库就是质量证明，欢迎翻代码。",
  },
  {
    no: "03",
    title: "判断过程公开",
    desc: "方法沉淀成 skill，思考写成文章。过程本身也是作品。",
  },
];

export function Method() {
  return (
    <section className="pt-[128px]">
      <div className="wrap">
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
          <span className="eyebrow pt-[20px]">HOW I BUILD</span>
          <h2 className="display fade-up" style={{ fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: 1.22 }}>
            做东西的三条规矩。
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {rules.map((r) => (
            <div key={r.no}>
              <div className="mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)" }}>
                rule_{r.no}
              </div>
              <h3 className="display" style={{ fontSize: 21, marginBottom: 8 }}>
                {r.title}
              </h3>
              <p className="tw-pretty max-w-[300px] text-sm" style={{ color: "var(--ink-sub)", lineHeight: 1.8 }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
