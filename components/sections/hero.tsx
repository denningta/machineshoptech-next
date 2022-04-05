import { HeroGroq } from '../../lib/sanity-queries';
import { PortableText } from '@portabletext/react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import CallToAction from '../callToAction';

interface Props {
  data: HeroGroq;
}

function Hero({ data }: Props) {
  return (
    <div className="flex justify-center text-center mx-global-sm h-screen sm:h-[500px] -mt-[60px]">
      <div className="relative flex flex-col justify-center h-full max-w-primary-col">
        <div className="max-w-[650px]">
          {data.headline && (
            <div className="hero-portable-text text-5xl font-extrabold">
              <PortableText value={data.headline} />
            </div>
          )}
          {data.subHeadline && (
            <div className="hero-portable-text opacity-70 my-4">
              <PortableText value={data.subHeadline} />
            </div>
          )}
          {data.callsToAction &&
            data.callsToAction.length &&
            data.callsToAction.map((callToAction) => (
              <div key={callToAction._id} className="flex justify-center mb-4">
                <CallToAction data={callToAction} />
              </div>
            ))}
        </div>

        <div className="absolute bottom-0 w-full flex justify-center items-end pb-4">
          <BsChevronDoubleDown className="animate-bounce" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
