import { CallToActionGroq } from '../sanity/sanity-quries';
import { BsChevronDoubleRight } from 'react-icons/bs';

interface Props {
  callToAction: CallToActionGroq;
}

function CallToAction({ callToAction }: Props) {
  return (
    <div className="">
      <button className="flex items-center px-5 py-2 rounded-full bg-gray-700">
        <div className="mr-3">{callToAction.buttonText}</div>
        <BsChevronDoubleRight />
      </button>
    </div>
  );
}

export default CallToAction;
