import { PortableText } from '@portabletext/react';
import { GenericHeaderGroq } from '../../lib/sanity-queries';

interface Props {
  data: GenericHeaderGroq;
}

function GenericHeader({ data }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-primary-col text-center my-16">
        <div className="text-5xl font-extrabold">
          {data.headline && <PortableText value={data.headline} />}
        </div>
        <div className="mt-8">
          {data.subHeadline && <PortableText value={data.subHeadline} />}
        </div>
      </div>
    </div>
  );
}

export default GenericHeader;
