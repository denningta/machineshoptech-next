/* eslint-disable react/prop-types */
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Footer from '../../components/footer';
import Layout from '../../components/layout';
import Post from '../../components/blog/post';
import {
  getBlogNavItems,
  getFooter,
  getPost,
  getPostsPaths,
  getSiteSettings,
} from '../../lib/api';
import {
  FooterGroq,
  NavItemGroq,
  PostGroq,
  SiteSettingsGroq,
} from '../../lib/sanity-queries';

interface Props {
  siteSettings: SiteSettingsGroq;
  navItems: NavItemGroq[];
  footer: FooterGroq;
  post: PostGroq;
}

const PostPage: NextPage<Props> = ({
  siteSettings,
  navItems,
  footer,
  post,
}) => {
  return (
    <Layout navItems={navItems} siteSettings={siteSettings}>
      <Post post={post} />
      <Footer footerData={footer} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostsPaths();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params);
  const siteSettings = await getSiteSettings();
  const navItems = await getBlogNavItems();
  const footer = await getFooter('blog');
  return { props: { siteSettings, navItems, footer, post } };
};

export default PostPage;
