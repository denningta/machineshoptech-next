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
import {
  landingPagesQuery,
  postListQuery,
  siteSettingsQuery,
} from '../sanity/sanity-queries';
import { landingPageQuery } from '../sanity/sanity-queries';
import { LandingPagesQuery } from '../sanity/sanity-queries';

const LandingPage: NextPage = ({
  siteSettings,
  landingPage,
  postList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(landingPage);
  console.log(postList);
  console.log(siteSettings);
  return (
    <Layout navItems={landingPage.navItems} siteSettings={siteSettings}>
      <div className="mt-[60px]">
        <Header headerData={landingPage.header} />
        <Sections sections={landingPage.sections} postList={postList} />
        <Footer footerData={landingPage.footer} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const landingPages: LandingPagesQuery = await client.fetch(landingPagesQuery);

  const paths = landingPages.map((landingPage) => {
    const slugArray = landingPage.slug.split('/');
    if (slugArray.includes('root')) return { params: { slug: [] } };

    return {
      params: { slug: slugArray },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const siteSettings = await client.fetch(siteSettingsQuery);

  let slug = 'root';
  if (params?.slug && params.slug[0]) slug = params.slug[0];
  const landingPage = await client.fetch(landingPageQuery, {
    slug: slug,
  });

  const postList = await client.fetch(postListQuery);

  return { props: { siteSettings, landingPage, postList } };
};

export default LandingPage;
