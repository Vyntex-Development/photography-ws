import About from "../components/pages/About/About";
import Who from "../components/pages/About/Who";
import LineList from "../components/pages/About/LineList";
import Form from "../components/layout/Form";
import { cv } from "../cms/cv";
import { exibitions } from "../cms/exibitions";
import SEO from "../components/SEO/SEO.js";

const about = ({ cv, exibitions }) => {
  return (
    <>
      <SEO metaTitle="About" />
      <About />
      <Who />
      <LineList cv={cv} exibitions={exibitions} />
      <Form />
    </>
  );
};

export default about;

export async function getStaticProps() {
  return {
    props: {
      cv,
      exibitions,
    },
  };
}
