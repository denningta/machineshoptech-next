import { CtaSectionGroq } from '../../lib/sanity-queries';
import CallToAction from '../callToAction';

interface Props {
  data: CtaSectionGroq;
}

function CtaSection({ data }: Props) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-6 p-6 md:px-16 rounded-lg max-w-primary-col w-full py-16 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="md:col-span-2">
          <div className="text-3xl font-extrabold">{data.headline}</div>
          <div className="text-5xl font-extrabold mt-3">{data.subHeadline}</div>
        </div>
        <div className="flex flex-wrap md:justify-end items-center">
          {data.callsToAction?.map((callToAction) => (
            <div key={callToAction._id} className="min-w-fit mr-4 mt-4">
              <CallToAction data={callToAction} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
