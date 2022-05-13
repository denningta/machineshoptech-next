import { Introduction } from '../../interfaces/sanity-schema';
import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity-client';
import { PortableText } from '@portabletext/react';

interface Props {
  data: Introduction;
}

function Introduction({ data }: Props) {
  return (
    <div className="flex justify-center px-4 border-b border-neutral-800 bg-neutral-800">
      <div className="flex flex-col items-center max-w-primary-col my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 content-center">
          <div className="flex flex-col items-center">
            <div className="mt-6 text-3xl font-extrabold">{data.tagline}</div>
            <div className="mt-6 text-xl">{data.headline}</div>
            <div className="mt-6">
              {data.image && (
                <Image
                  className="rounded-full overflow-clip shadow-lg"
                  width={260}
                  height={260}
                  alt={`Cover Image for ${data.headline}`}
                  src={imageBuilder(data.image).width(800).height(800).url()}
                />
              )}
            </div>
          </div>
          <div className="my-5 leading-8 portable-text">
            {data.introduction && <PortableText value={data.introduction} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
