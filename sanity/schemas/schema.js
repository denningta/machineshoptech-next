// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Object Types
import blockContent from './objects/blockContent'
import simplePortableText from './objects/simplePortableText';
import pageLink from './objects/page-link';

// Document Types
import category from './documents/category'
import post from './documents/post';
import author from './documents/author';
import featureSummary from './documents/sections/feature-summary';
import landingPage from './documents/landing-page';
import callToAction from './documents/call-to-action';
import navItems from './documents/nav-items';
import route from './documents/route';
import footer from './documents/sections/footer';
import socialConnection from './documents/social-connection';
import siteSettings from './documents/siteSettings';
import hero from './documents/sections/hero';
import featureList from './documents/sections/feature-list';
import ctaSection from './documents/sections/cta-section';
import metrics from './documents/sections/metrics';
import testimonial from './documents/testimonial';
import logoCloud from './documents/sections/logo-cloud';
import team from './documents/sections/team';
import postList from './documents/sections/post-list';
import testimonialSection from './documents/sections/testimonial-section';
import genericHeader from './documents/sections/generic-header';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //Documents
    route,
    landingPage,
    callToAction,
    hero,
    featureSummary,
    featureList,
    footer,
    navItems,
    socialConnection,
    post,
    author,
    category,
    siteSettings,
    ctaSection,
    metrics,
    testimonial,
    logoCloud,
    team,
    postList,
    testimonialSection,
    genericHeader,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    simplePortableText,
    pageLink,
  ]),
})
