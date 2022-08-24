import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import BusinessPlan from "../components/pages/Homepage/BusinessPlan";

const home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BusinessPlan />
      <Footer />
    </div>
  );
};

export default home;
