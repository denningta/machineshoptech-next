import { ParsedUrlQuery } from 'querystring';
import client from './sanity-client';
import {
  blogNavItems,
  LandingPageGroq,
  landingPageQuery,
  LandingPagesPathsGroq,
  landingPagesPathsQuery,
  NavItemGroq,
  PostGroq,
  PostListGroq,
  postListQuery,
  postQuery,
  PostsPathsGroq,
  postsPathsQuery,
  SiteSettingsGroq,
  siteSettingsQuery,
} from './sanity-queries';

export async function getLandingPagesPaths() {
  const landingPages: LandingPagesPathsGroq = await client.fetch(
    landingPagesPathsQuery
  );

  return landingPages.map((landingPage) => {
    const slugArray = landingPage.slug.split('/');
    if (slugArray.includes('root')) return { params: { slug: [] } };

    return {
      params: { slug: slugArray },
    };
  });
}

export async function getSiteSettings(): Promise<SiteSettingsGroq> {
  return await client.fetch(siteSettingsQuery);
}

export async function getLandingPage(
  params: ParsedUrlQuery | undefined
): Promise<LandingPageGroq> {
  let slug = 'root';
  if (params?.slug && params.slug[0]) slug = params.slug[0];
  return await client.fetch(landingPageQuery, {
    slug: slug,
  });
}

export async function getBlogNavItems(): Promise<NavItemGroq[]> {
  return await client.fetch(blogNavItems);
}

export async function getPostList(): Promise<PostListGroq> {
  return await client.fetch(postListQuery);
}

export async function getPostsPaths() {
  const postsPaths: PostsPathsGroq = await client.fetch(postsPathsQuery);
  return postsPaths.map((postPath) => {
    return {
      params: { slug: postPath.slug },
    };
  });
}

export async function getPost(
  params: ParsedUrlQuery | undefined
): Promise<PostGroq> {
  const slug = params && params.slug;

  return await client.fetch(postQuery, {
    slug: slug,
  });
}
