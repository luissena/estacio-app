import CtaSection from "../components/molecules/CtaSection";
import FeatureSection from "../components/molecules/FeatureSection";
import HeroSection from "../components/molecules/HeroSection";
import ProductLists from "../components/ProductLists";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CtaSection />
      <ProductLists/>
    </>
  );
}
