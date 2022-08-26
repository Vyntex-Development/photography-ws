import Hero from "../../layout/Hero";
import Portfolio from "../../layout/Portfolio";
import BlogPosts from "../../layout/BlogPosts";
import BusinessPlan from "./BusinessPlan";

const HomePage = () => {
  return (
    <>
      <Hero title="Alexander Alexadrovic" media="/images/hero.png" />
      <Portfolio />
      <BlogPosts />
      <BusinessPlan />
    </>
  );
};

export default HomePage;
