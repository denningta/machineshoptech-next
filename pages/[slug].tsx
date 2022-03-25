import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import sanity from '../sanity/sanity-client';
import { LandingPage } from '../interfaces/sanity-schema';
import { landingPageQuery } from '../sanity/sanity-quries';
import groq from 'groq';

const landingPagesResult = groq`*[_type == 'landingPage'] { "slug": slug.current }`;
type LandingPagesResult = [{ slug: string }];

const singlePageQuery = groq`*[_type == 'landingPage' && slug.current == $slug]{
  ...,
  "navItems": navItems[]->{
    icon,
    title,
    "route": route->slug.current
  }
}[0]`;

const LandingPage: NextPage = ({
  landingPage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(landingPage);
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout landingPageData={landingPage}>
      <div>Slug: {slug}</div>
      <div>Landing Page: {landingPage.internalTitle}</div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const landingPages: LandingPagesResult = await sanity.fetch(
    landingPagesResult
  );

  console.log(landingPages);
  const paths = landingPages.map((landingPage) => {
    return { params: { slug: landingPage.slug } };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const landingPage = await sanity.fetch(singlePageQuery, {
    slug: params?.slug,
  });

  return { props: { landingPage } };
};

export default LandingPage;
