import { HeroGroq, CtaSectionGroq } from '../sanity/sanity-quries';
import Hero from './sections/hero';

interface Props {
  headerData: HeroGroq | CtaSectionGroq;
}

function Header({ headerData }: Props) {
  if (headerData._type === 'ctaSection')
    // TODO: create ctaSection
    return (
      <>
        <div>Cta Section works</div>
        <div>{headerData.headline}</div>
      </>
    );

  // Return hero component by default
  return (
    <>
      <Hero data={headerData} />
    </>
  );
}

export default Header;
