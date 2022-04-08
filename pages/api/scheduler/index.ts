import { SanityClient } from '@sanity/client';
import groq from 'groq';
import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../lib/sanity-client';

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
  });
  response.status(200).json({ message: 'success' });
}

const publish = async (metadata: any, client: SanityClient) => {
  const dataset = client.config().dataset;
  console.log(dataset);
};
