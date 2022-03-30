import { MetricsGroq } from '../../sanity/sanity-queries';

interface Props {
  data: MetricsGroq;
}

function Metrics({ data }: Props) {
  return (
    <div className="flex flex-col w-full justify-center items-center py-16 px-global-sm">
      <div className="max-w-primary-col">
        <div className="text-center">
          <div className="text-xl font-extrabold text-neutral-100">
            {data.headline}
          </div>
          <div className="text-3xl font-extrabold mt-4">{data.subHeadline}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-8">
          {data.metrics?.map((metric) => (
            <div key={metric._key} className="text-center">
              <div className="text-5xl font-extrabold">{metric.number}</div>
              <div>{metric.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Metrics;
