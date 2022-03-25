import type { InferGetStaticPropsType, NextPage } from 'next';
import Layout from '../components/layout';
import sanityClient from '../sanity/sanity-client';
import { GetStaticProps } from 'next';
import { LandingPage } from '../interfaces/sanity-schema';

type LandingPageData = {
  landingPageData: LandingPage;
};

const query = `*[_type == 'landingPage' && slug.current == 'root'][0]`;

const Home: NextPage = ({
  landingPageData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <div>{landingPageData.internalTitle}</div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const landingPageData: LandingPageData = await sanityClient.fetch(query);
  return {
    props: { landingPageData },
  };
};

export default Home;
