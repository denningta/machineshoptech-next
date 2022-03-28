import { SectionGroq } from '../../sanity/sanity-quries';
import FeatureSummary from '../sections/featureSummary';
import CtaSection from './ctaSection';
import FeatureList from './featureList';
import Hero from './hero';
import LogoCloud from './logoCloud';
import Metrics from './metrics';

interface Props {
  sections: SectionGroq[];
}

function Sections({ sections }: Props) {
  const sectionsElements = sections.map((section) => {
    switch (section._type) {
      case 'hero':
        return (
          <div key={section._id}>
            <Hero data={section} />
          </div>
        );
      case 'ctaSection':
        return (
          <div key={section._id}>
            <CtaSection />
          </div>
        );
      case 'featureList':
        return (
          <div key={section._id}>
            <FeatureList />
          </div>
        );
      case 'featureSummary':
        return (
          <div key={section._id}>
            <FeatureSummary data={section} />
          </div>
        );
      case 'logoCloud':
        return (
          <div key={section._id}>
            <LogoCloud />
          </div>
        );
      case 'metrics':
        return (
          <div key={section._id}>
            <Metrics />
          </div>
        );
    }
  });

  return <>{sectionsElements}</>;
}

export default Sections;
