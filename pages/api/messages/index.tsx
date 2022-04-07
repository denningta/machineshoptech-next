import { NextApiRequest, NextApiResponse } from 'next';
import { createMessage } from '../../../lib/fauna/graphql-client';

type HandlerFunctions = { [key: string]: () => Promise<void> };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req || !req.method) {
    res.status(400).end();
    return;
  }

  const handlers: HandlerFunctions = {
    POST: async () => {
      const {
        body: { name, email, message },
      } = req;
      const created = await createMessage({
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
      });

      res.json(created);
    },
  };

  if (!handlers[req.method]) {
    return res.status(405).end();
  }

  await handlers[req.method]();
}
