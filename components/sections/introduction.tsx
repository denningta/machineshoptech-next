import { Introduction } from '../../interfaces/sanity-schema';
import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity-client';
import { PortableText } from '@portabletext/react';

interface Props {
  data: Introduction;
}

function Introduction({ data }: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center max-w-xl my-10">
        <div>
          {data.image && (
            <Image
              className="rounded-full overflow-clip shadow-lg"
              width={300}
              height={300}
              alt={`Cover Image for ${data.headline}`}
              src={imageBuilder(data.image).width(800).height(800).url()}
            />
          )}
        </div>
        <div className="mt-6 text-3xl font-extrabold">{data.tagline}</div>
        <div className="mt-6 text-xl">{data.headline}</div>
        <div className="mt-5 leading-8 portable-text">
          {data.introduction && <PortableText value={data.introduction} />}
        </div>
      </div>
    </div>
  );
}

export default Introduction;
