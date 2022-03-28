import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Header from '../components/header';
import Layout from '../components/layout';
import Sections from '../components/sections/sections';
import Footer from '../components/footer';
import client from '../sanity/sanity-client';
import { landingPagesQuery } from '../sanity/sanity-quries';
import { landingPageQuery } from '../sanity/sanity-quries';
import { LandingPagesQuery } from '../sanity/sanity-quries';

const LandingPage: NextPage = ({
  landingPage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout landingPageData={landingPage}>
      <div className="mx-4">
        <Header headerData={landingPage.header} />
        <Sections sections={landingPage.sections} />
        <Footer />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const landingPages: LandingPagesQuery = await client.fetch(landingPagesQuery);

  const paths = landingPages.map((landingPage) => {
    const slugArray = landingPage.slug.split('/');
    // console.log(slugArray.includes('root'), slugArray);
    if (slugArray.includes('root')) return { params: { slug: [] } };

    return {
      params: { slug: slugArray },
    };
  });
  console.log(paths);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slug = 'root';
  if (params?.slug && params.slug[0]) slug = params.slug[0];
  console.log('getStaticProps Params:', slug);
  const landingPage = await client.fetch(landingPageQuery, {
    slug: slug,
  });

  return { props: { landingPage } };
};

export default LandingPage;
