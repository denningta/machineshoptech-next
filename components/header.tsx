import {
  HeroGroq,
  CtaSectionGroq,
  GenericHeaderGroq,
} from '../sanity/sanity-queries';
import CtaSection from './sections/ctaSection';
import Hero from './sections/hero';
import GenericHeader from './sections/genericHeader';

interface Props {
  headerData: HeroGroq | CtaSectionGroq | GenericHeaderGroq;
}

function Header({ headerData }: Props) {
  switch (headerData._type) {
    default:
      return <Hero data={headerData} />;
    case 'ctaSection':
      return <CtaSection data={headerData} />;
    case 'genericHeader':
      return <GenericHeader data={headerData} />;
  }
}

export default Header;
