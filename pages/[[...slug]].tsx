import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import sanity from '../sanity/sanity-client';
import { landingPagesQuery } from '../sanity/sanity-quries';
import { landingPageQuery } from '../sanity/sanity-quries';
import { LandingPagesQuery } from '../sanity/sanity-quries';

const LandingPage: NextPage = ({
  landingPage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(landingPage);
  return (
    <Layout landingPageData={landingPage}>
      <div>Slug: {slug}</div>
      <div>Landing Page:</div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const landingPages: LandingPagesQuery = await sanity.fetch(landingPagesQuery);

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
  const landingPage = await sanity.fetch(landingPageQuery, {
    slug: slug,
  });

  return { props: { landingPage } };
};

export default LandingPage;
