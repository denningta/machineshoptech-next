import { CallToActionGroq } from '../sanity/sanity-quries';
import { BsChevronDoubleRight } from 'react-icons/bs';

interface Props {
  data: CallToActionGroq;
}

function CallToAction({ data }: Props) {
  switch (data.style) {
    default: // Default to Primary
      return (
        <div className="">
          <button className="flex items-center px-5 py-2 rounded-full bg-primary-700">
            <div className="mr-3">{data.buttonText}</div>
          </button>
        </div>
      );
    case 'secondary':
      return (
        <div className="">
          <button className="flex items-center px-5 py-2 rounded-full bg-gray-700">
            <div className="mr-3">{data.buttonText}</div>
            <BsChevronDoubleRight />
          </button>
        </div>
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
            <div className="w-fit -ml-5 px-4 py-3 cursor-pointer transition ease-in-out bg-rose-600 hover:bg-rose-800">
              {data.buttonText}
            </div>
          </div>
        </div>
      );
  }
}

export default CallToAction;
