import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { ProductGrid } from "@/components/home/ProductGrid";
import { Method } from "@/components/home/Method";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <div className="page-shell pb-4">
      <Hero />
      <Ticker />
      <ProductGrid />
      <Method />
    </div>
  );
}
