import { HeroGroq } from '../../sanity/sanity-quries';
import { PortableText } from '@portabletext/react';

interface Props {
  data: HeroGroq;
}

function Hero({ data }: Props) {
  return (
    <div className="text-center my-8">
      {data.headline && (
        <div className="text-3xl font-extrabold">{data.headline}</div>
      )}
      {data.subHeadline && (
        <div className="opacity-70 my-4">
          <PortableText value={data.subHeadline} />
        </div>
      )}
    </div>
  );
}

export default Hero;
