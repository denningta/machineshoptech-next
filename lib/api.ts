import client from './sanity-client';
import {
  LandingPagesPathsGroq,
  landingPagesPathsQuery,
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

export async function getSiteSettings() {
  return await client.fetch(siteSettingsQuery);
}
