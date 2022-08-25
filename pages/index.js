import Hero from "../components/layout/Hero";
import BusinessPlan from "../components/pages/Homepage/BusinessPlan";
import BlogPosts from "../components/layout/BlogPosts";
import Portfolio from "../components/layout/Portfolio";


const home = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <BlogPosts />
      <BusinessPlan />
      </>
  );
};

export default home;
