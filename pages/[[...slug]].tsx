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
import {
  getLandingPage,
  getLandingPagesPaths,
  getPostList,
  getSiteSettings,
} from '../lib/api';

const LandingPage: NextPage = ({
  siteSettings,
  landingPage,
  postList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navItems={landingPage.navItems} siteSettings={siteSettings}>
      <div className="pt-[60px] flex flex-col min-h-screen">
        <Header headerData={landingPage.header} />
        <div className="grow">
          <Sections sections={landingPage.sections} postList={postList} />
        </div>
        <Footer footerData={landingPage.footer} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getLandingPagesPaths();
  console.log(paths);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const siteSettings = await getSiteSettings();
  const landingPage = await getLandingPage(params);
  const postList = await getPostList();

  return { props: { siteSettings, landingPage, postList } };
};

export default LandingPage;
