import { PortableText } from '@portabletext/react';
import { urlFor } from '../../sanity/sanity-client';
import { FeatureSummaryGroq } from '../../sanity/sanity-quries';
import CallToAction from '../callToAction';

interface Props {
  data: FeatureSummaryGroq;
}

function FeatureSummary({ data }: Props) {
  console.log(data);
  return (
    <div className="flex justify-center border-y border-neutral-100 border-opacity-20 bg-neutral-800">
      <div className="max-w-primary-col md:grid md:grid-cols-2 py-10 h-full px-global-sm ">
        <div className="flex flex-col justify-center pr-5">
          {data.headline && (
            <div className="text-neutral-100 font-extrabold text-lg">
              {data.headline}
            </div>
          )}
          {data.subHeadline && (
            <div className="text-3xl font-extrabold mt-4">
              {data.subHeadline}
            </div>
          )}
          {data.description && (
            <div className="opacity-70 mt-4">
              <PortableText value={data.description} />
            </div>
          )}
          {data.callToAction && (
            <div className="mt-6">
              <CallToAction callToAction={data.callToAction} />
            </div>
          )}
        </div>
        {data.image && (
          <div className="flex flex-col justify-center items-center mt-4 w-full">
            <img
              className="object-center rounded overflow-clip w-[500px]"
              src={urlFor(data.image).width(500).url()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FeatureSummary;
