import { FeatureListGroq } from '../../sanity/sanity-queries';

interface Props {
  data: FeatureListGroq;
}

function FeatureList({ data }: Props) {
  return (
    <div className="flex flex-col items-center justify-center px-global-sm py-16">
      <div className="max-w-primary-col">
        <div className="text-center">
          <div className="text-lg font-extrabold text-neutral-100">
            {data.headline}
          </div>
          <div className="text-3xl font-extrabold mt-4">{data.subHeadline}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:gap-6 w-full mt-8">
          {data.features?.map((feature) => (
            <div
              key={feature._key}
              className="bg-neutral-800 rounded-lg p-4 md:p-6 max-w-sm w-full"
            >
              <div className="text-xl font-extrabold">
                {feature.featureTitle}
              </div>
              <div className="opacity-70 mt-4">
                {feature.featureDescription}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureList;
