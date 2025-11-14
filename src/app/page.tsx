import FeatureHighLight from "@/components/home/FeatureHighlightSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import ProductShowcaseSection from "@/components/home/ShowcaseSection";
import FollowUsSection from "@/components/home/FollowUsSection";
import FeedbackSection from "@/components/home/FeedbackSection";
import HeroSection from "@/components/home/HeroSection";
import ProcessSection from "@/components/home/ProcessSection";
import CoffeeTypesSection from "@/components/home/CoffeeTypesSection";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductShowcaseSection />
      <FeatureHighLight />
      <ProcessSection />
      <CoffeeTypesSection />
      <FeedbackSection />
      <FollowUsSection />
    </main>
  );
}
