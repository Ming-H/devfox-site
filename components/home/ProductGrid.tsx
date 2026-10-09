import { products, type Product } from "@/lib/products";

const statusColor: Record<Product["status"], string> = {
  live: "var(--ok)",
  new: "var(--accent)",
  popular: "var(--accent)",
  oss: "var(--ink-sub)",
  active: "var(--ink-sub)",
};

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col no-underline transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(232,89,12,0.5)]"
      style={{
        background: "var(--card)",
        border: "1px solid var(--line)",
        borderRadius: 10,
        padding: "30px 30px 24px",
      }}
    >
      <div className="mb-[18px] flex items-start justify-between">
        <span className="eyebrow">{product.category}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 19, color: "var(--accent)", lineHeight: 1 }}>
          {product.glyph}
        </span>
      </div>
      <span
        className="block"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11.5px",
          color: statusColor[product.status],
          marginTop: -6,
          marginBottom: 10,
        }}
      >
        {product.status === "live" ? "● " : ""}
        {product.statusLabel}
      </span>
      <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 24, marginBottom: 10, lineHeight: 1.3 }}>
        {product.name}
        {product.en ? <span style={{ color: "var(--ink-faint)", fontWeight: 600 }}> {product.en}</span> : null}
      </h3>
      <p className="tw-pretty flex-1 text-[13.5px]" style={{ color: "var(--ink-sub)", lineHeight: 1.75 }}>
        {product.desc}
      </p>
      <div
        className="mt-5 flex items-center justify-between pt-4"
        style={{ borderTop: "1px solid var(--line)", marginLeft: -30, marginRight: -30, paddingLeft: 30, paddingRight: 30 }}
      >
        <span className="text-[13px]" style={{ color: "var(--ink)" }}>
          {product.linkLabel}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>↗</span>
      </div>
    </a>
  );
}

export function ProductGrid() {
  return (
    <section id="products" className="pt-[136px]">
      <div className="wrap">
        {/* 偏移式 section 头：眉标居左，大标题起排在偏移列 */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
          <span className="eyebrow pt-[22px]">MADE BY DEVFOX</span>
          <div>
            <h2
              className="fade-up"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 600,
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: 1.24,
                marginLeft: "11%",
              }}
            >
              一些有具体来历的工具、
              <br />
              方法与实验。
            </h2>
            <p className="tw-pretty mt-[22px] max-w-[560px] text-[15px]" style={{ marginLeft: "11%", color: "var(--ink-sub)" }}>
              每件东西都从一个真实问题开始。有的成了日常依赖，有的保持开源方法，都在仓库里活着。
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
