import { Navbar } from "./components/sections/navbar";
import { Hero } from "./components/sections/hero";
import { Products } from "./components/sections/products";
import { ProductStory } from "./components/sections/product-story";
import { FeatureGrid } from "./components/sections/feature-grid";
import { VisualShowcase } from "./components/sections/visual-showcase";
import { Footer } from "./components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Products />
      <ProductStory />
      <FeatureGrid />
      <VisualShowcase />
      <Footer />
    </main>
  );
}
