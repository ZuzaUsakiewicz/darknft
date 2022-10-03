import HeroSection from "../components/HomePage/HeroSection";
import ClientsLogos from "../components/HomePage/ClientsLogos";
import LiveAuctions from "../components/HomePage/LiveAuctions";
import HowItWorks from "../components/HomePage/HowItWorks";
import PopularCollections from "../components/HomePage/PopularCollections";
import Newsletter from "../components/HomePage/Newsletter";
import TopCreatorsSection from "../components/HomePage/TopCreatorsSection";
import ExploreByCategories from "../components/HomePage/ExploreByCategories";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection />
      <ClientsLogos />
      <LiveAuctions />
      <HowItWorks />
      <PopularCollections />
      <ExploreByCategories />
      <TopCreatorsSection />
      <Newsletter />
    </motion.div>
  );
}

export default Home;
