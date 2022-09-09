import Head from "next/head";

const SEO = ({ metaTitle }) => {
  return (
    <Head>
      <title>{metaTitle ? metaTitle : "Title"}</title>
      <meta name="description" content="descriptoin-placeholder" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default SEO;
