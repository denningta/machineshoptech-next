import { CtaSectionGroq } from '../../sanity/sanity-queries';
import CallToAction from '../callToAction';

interface Props {
  data: CtaSectionGroq;
}

function CtaSection({ data }: Props) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6 p-6 md:px-16 rounded-lg max-w-primary-col w-full py-16 bg-gradient-to-r from-fuchsia-500 to-indigo-500">
        <div>
          <div className="text-2xl font-extrabold">{data.headline}</div>
          <div className="text-2xl font-extrabold">{data.subHeadline}</div>
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
