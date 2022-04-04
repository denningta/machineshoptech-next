import { PortableText } from '@portabletext/react';
import { imageBuilder } from '../../lib/sanity-client';
import { FeatureSummaryGroq } from '../../lib/sanity-queries';
import Image from 'next/image';
import CallToAction from '../callToAction';

interface Props {
  data: FeatureSummaryGroq;
}

function FeatureSummary({ data }: Props) {
  return (
    <div className="flex justify-center border-y border-neutral-100 border-opacity-20 bg-neutral-800">
      <div className="max-w-primary-col md:grid md:grid-cols-2 my-16 h-full px-global-sm ">
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
          <div className="flex mt-6">
            {data.callsToAction?.map((callToAction) => (
              <div key={callToAction._id} className="mr-4">
                <CallToAction data={callToAction} />
              </div>
            ))}
          </div>
        </div>
        {data.image && (
          <div className="flex flex-col justify-center items-center mt-10 w-full rounded-lg overflow-clip">
            <Image
              width={540}
              height={340}
              alt={`Cover Image for ${data.headline}`}
              src={imageBuilder(data.image).width(540).height(340).url()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FeatureSummary;
