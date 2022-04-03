import { LogoCloudGroq } from '../../lib/sanity-queries';

interface Props {
  data: LogoCloudGroq;
}

function LogoCloud({ data }: Props) {
  return (
    <div className="flex flex-col items-center w-full my-16 px-global-sm">
      <div className="max-w-primary-col text-center">
        <div className="text-3xl font-extrabold">{data.headline}</div>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full mt-8">
          {data.companies?.map((company) => (
            <div
              key={company._key}
              className="flex p-8 justify-center bg-neutral-800 rounded-lg max-w-sm sm:max-w-none w-full"
            >
              <div className="mr-4">Logo</div>
              <div>{company.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoCloud;
