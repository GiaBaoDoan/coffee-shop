import FeatureHighLight from "@/components/home/FeatureHighlightSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import ProductShowcaseSection from "@/components/home/ShowcaseSection";
import FollowUsSection from "@/components/home/FollowUsSection";
import FeedbackSection from "@/components/home/FeedbackSection";
import HeroSection from "@/components/home/HeroSection";
import ProcessSection from "@/components/home/ProcessSection";
import CoffeeTypesSection from "@/components/home/CoffeeTypesSection";
import { getCategories } from "@/apis/catgories";
import { getLastestProducts } from "@/apis/product";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getLastestProducts(),
  ]);

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductShowcaseSection products={products} />
      <FeatureHighLight />
      <ProcessSection />
      <CoffeeTypesSection />
      <FeedbackSection />
      <FollowUsSection />
    </main>
  );
}
