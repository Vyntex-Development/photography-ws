import Hero from "../components/layout/Hero";
import BusinessPlan from "../components/pages/Homepage/BusinessPlan";
import BlogPosts from "../components/layout/BlogPosts";

const home = () => {
  return (
    <>
      <Hero />
      <BlogPosts />
      <BusinessPlan />
    </>
  );
};

export default home;
