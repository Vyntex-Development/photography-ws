import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import BusinessPlan from "../components/pages/Homepage/BusinessPlan";
import BlogPosts from "../components/layout/BlogPosts";

const home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BlogPosts />
      <BusinessPlan />
      <Footer />
    </div>
  );
};

export default home;
