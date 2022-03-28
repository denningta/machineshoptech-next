import { HeroGroq } from '../../sanity/sanity-quries';
import { PortableText } from '@portabletext/react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { urlFor } from '../../sanity/sanity-client';
import CallToAction from '../callToAction';

interface Props {
  data: HeroGroq;
}

function Hero({ data }: Props) {
  return (
    <div className="flex justify-center text-center mx-global-sm h-screen sm:h-[500px] -mt-[60px]">
      <div className="relative flex flex-col justify-center h-full max-w-[800px]">
        {data.headline && (
          <div className="text-3xl font-extrabold">{data.headline}</div>
        )}
        {data.subHeadline && (
          <div className="opacity-70 my-4">
            <PortableText value={data.subHeadline} />
          </div>
        )}
        {data.image && (
          <div>
            <img src={urlFor(data.image).url()} />
          </div>
        )}
        {data.callsToAction &&
          data.callsToAction.map((callToAction) => {
            <CallToAction callToAction={callToAction} />;
          })}
        <div className="absolute bottom-0 w-full flex justify-center items-end pb-4">
          <BsChevronDoubleDown className="animate-bounce" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
