import Hero from "../../layout/Hero";
import Portfolio from "../../layout/Portfolio";
import BlogPosts from "../../layout/BlogPosts";
import BusinessPlan from "./BusinessPlan";

const HomePage = ({ blogs, projects }) => {
  return (
    <>
      <Hero title="Alexander Alexadrovic" media="/images/hero.png" />
      <Portfolio projects={projects} />
      <BlogPosts blogs={blogs} />
      <BusinessPlan />
    </>
  );
};

export default HomePage;
