/* eslint-disable react/prop-types */
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Layout from '../../components/layout';
import {
  getBlogNavItems,
  getPost,
  getPostsPaths,
  getSiteSettings,
} from '../../lib/api';
import {
  NavItemGroq,
  PostGroq,
  SiteSettingsGroq,
} from '../../lib/sanity-queries';

interface Props {
  siteSettings: SiteSettingsGroq;
  navItems: NavItemGroq[];
  post: PostGroq;
}

const Post: NextPage<Props> = ({ siteSettings, navItems, post }) => {
  console.log(post);
  console.log(navItems);
  return (
    <Layout navItems={navItems} siteSettings={siteSettings}>
      <div className="flex flex-col items-center w-full max-w-primary-col mt-[60px]">
        <div>{post.title}</div>
      </div>
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
  return { props: { siteSettings, navItems, post } };
};

export default Post;
