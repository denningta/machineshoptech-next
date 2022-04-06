import { CallToActionGroq } from '../lib/sanity-queries';
import { BsChevronDoubleRight } from 'react-icons/bs';
import Link from 'next/link';

interface Props {
  data: CallToActionGroq;
}

function CallToAction({ data }: Props) {
  console.log(data);
  let route = '';
  if (data.route.type === 'post') {
    route = '/blog/' + data.route.slug;
  } else if (data.route.type === 'landingPage') {
    route = '/' + data.route.slug;
  }

  switch (data.style) {
    default: // Default to Primary
      return (
        <Link href={route}>
          <button className="flex items-center px-5 py-2 rounded-full transition ease-in-out bg-primary-500 hover:bg-primary-400 hover:scale-[1.02]">
            <div className="">{data.buttonText}</div>
          </button>
        </Link>
      );
    case 'secondary':
      return (
        <Link href={route}>
          <button className="flex items-center px-5 py-2 rounded-full bg-gray-700">
            <div className=" mr-3">{data.buttonText}</div>
            <BsChevronDoubleRight />
          </button>
        </Link>
      );
    case 'email':
      return (
        <div className="p-1 rounded-full bg-gradient-to-r from-zinc-500 bg-zinc-800 hover:bg-gradient-to-r hover:from-zinc-400 hover:bg-zinc-700 drop-shadow">
          <div className="flex rounded-full overflow-hidden">
            <input
              type="text"
              id="emailSubmit"
              className="bg-zinc-100 sm:w-[275px] outline-none text-black px-5"
              placeholder="Enter your email..."
            />
            <div className="-ml-5 px-4 py-3 cursor-pointer transition ease-in-out bg-rose-600 hover:bg-rose-800">
              {data.buttonText}
            </div>
          </div>
        </div>
      );
  }
}

export default CallToAction;
