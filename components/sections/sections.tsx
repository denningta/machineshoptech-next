import { PostListGroq, SectionGroq } from '../../lib/sanity-queries';
import FeatureSummary from '../sections/featureSummary';
import CtaSection from './ctaSection';
import FeatureList from './featureList';
import Hero from './hero';
import LogoCloud from './logoCloud';
import Metrics from './metrics';
import PostListSection from '../blog/postList';

interface Props {
  sections: SectionGroq[];
  postList: PostListGroq;
}

function Sections({ sections, postList }: Props) {
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
            <CtaSection data={section} />
          </div>
        );
      case 'featureList':
        return (
          <div key={section._id}>
            <FeatureList data={section} />
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
            <LogoCloud data={section} />
          </div>
        );
      case 'metrics':
        return (
          <div key={section._id}>
            <Metrics data={section} />
          </div>
        );
      case 'postList':
        return (
          <div key={section._id}>
            <PostListSection data={section} postList={postList} />
          </div>
        );
    }
  });

  return <>{sectionsElements}</>;
}

export default Sections;
