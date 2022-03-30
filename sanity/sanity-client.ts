import sanityClient from '@sanity/client';

import {createPreviewSubscriptionHook, createCurrentUserHook} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: 'b74i10k9',
  dataset: 'production',
  useCdn: true,
  apiVersion: 'v2021-10-21',
});

export default client;

export const imageBuilder = (source) => createImageUrlBuilder(client).image(source);
