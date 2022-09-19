import HeroSection from "../components/HomePage/HeroSection";
import ClientsLogos from "../components/HomePage/ClientsLogos";
import LiveAuctions from "../components/HomePage/LiveAuctions";
import HowItWorks from "../components/HomePage/HowItWorks";
import PopularCollections from "../components/HomePage/PopularCollections";
import Newsletter from "../components/HomePage/Newsletter";
import TopCreatorsSection from "../components/HomePage/TopCreatorsSection";
import ExploreByCategories from "../components/HomePage/ExploreByCategories";

function Home() {
  return (
    <>
      <HeroSection />
      <ClientsLogos />
      <LiveAuctions />
      <HowItWorks />
      <PopularCollections />
      <ExploreByCategories />
      <TopCreatorsSection />
      <Newsletter />
    </>
  );
}

export default Home;
