import { PortableText } from '@portabletext/react';
import { urlFor } from '../../sanity/sanity-client';
import { FeatureSummaryGroq } from '../../sanity/sanity-quries';

interface Props {
  data: FeatureSummaryGroq;
}

function FeatureSummary({ data }: Props) {
  return (
    <>
      {data.headline && <div>{data.headline}</div>}
      {data.subHeadline && <div>{data.subHeadline}</div>}
      {data.description && (
        <div className="opacity-70 my-4">
          <PortableText value={data.description} />
        </div>
      )}
      {data.image && (
        <div className="rounded overflow-clip">
          <img src={urlFor(data.image).url()} />
        </div>
      )}
    </>
  );
}

export default FeatureSummary;
