import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: 'b74i10k9',
  dataset: 'production',
  useCdn: true,
  apiVersion: 'v2021-10-21',
});

export default client;

export const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source)
}