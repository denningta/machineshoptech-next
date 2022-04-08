import sanityClient, { SanityClient } from '@sanity/client';
import groq from 'groq';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PostGroq, SanityScheduleMetadata } from '../../../lib/sanity-queries';
import axios from 'axios';

const client = sanityClient({
  projectId: 'b74i10k9',
  dataset: 'production',
  apiVersion: 'v2021-10-21',
  // Need a write token in order to read schedule metadata and publish documents
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

type ResponseData = {
  message: string;
};

const query = groq`
  *[_type == "schedule.metadata" && !(_id in path("drafts.**")) && datetime <= now()]
`;

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>
) {
  client.fetch(query).then((res) => {
    console.log(res);
    return Promise.all(
      res.map((metadata: SanityScheduleMetadata) => publish(metadata, client))
    );
  });
  response.status(200).json({ message: 'success' });
}

const publish = async (
  metadata: SanityScheduleMetadata,
  client: SanityClient
) => {
  const projectId = client.config().projectId;
  const apiVersion = client.config().apiVersion;
  const dataset = client.config().dataset;
  const token = client.config().token;
  const id = metadata.documentId;
  const rev = metadata.rev;

  // Fetch the draft revision we should publish from the History API
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/history/${dataset}/documents/drafts.${id}?revision=${rev}`;
  console.log(url);

  const revision = await axios
    .get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data && response.data.documents[0]);

  console.log(revision);
  if (!revision) {
    // Here we have a situation where the scheduled revision does not exist
    // This can happen if the document was deleted via Studio or API without
    // unscheduling it first.
    console.error('Could not find document revision to publish', metadata);
    return;
  }

  console.log('Object.assign: ', Object.assign({}, revision, { _id: id }));

  // Publish it
  return client
    .transaction()
    .createOrReplace(Object.assign({}, revision, { _id: id }))
    .delete(`drafts.${id}`)
    .delete(metadata._id)
    .commit()
    .then((res) => {
      console.log(JSON.stringify(res) + ' Success');
      discordWebhook(revision, metadata);
    });
};

const discordWebhook = (post: PostGroq, metadata: SanityScheduleMetadata) => {
  axios.post(
    'https://discord.com/api/webhooks/961931044599242784/ej91gp71MRg8krpxsEbbb-qP1FQ2kXsO8CI-pG2U_7f25o7xGNQTbKgJeRToUrg-7lrZ',
    {
      content: `**${post.title}** was successfully published.\nScheduled by ${metadata.user.displayName}`,
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
