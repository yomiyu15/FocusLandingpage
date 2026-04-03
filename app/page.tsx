import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FocusPillarsSection } from "@/components/home/FocusPillarsSection";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { HomeWhoWeAreSection } from "@/components/home/HomeWhoWeAreSection";
import { HomeWhyPartnerSection } from "@/components/home/HomeWhyPartnerSection";
import { HomeFinalCtaSection } from "@/components/home/HomeFinalCtaSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HomeHeroSection />
      <FocusPillarsSection />
      <HomeWhoWeAreSection />
      <HomeWhyPartnerSection />
      <HomeFinalCtaSection />
      <Footer />
    </div>
  );
}
