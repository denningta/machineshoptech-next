import S from '@sanity/desk-tool/structure-builder';
import siteSettings from './siteSettings';
import marketingSite from './marketing-site/marketingSite';
import blog from './blog/blog';

// React-icon https://react-icons.github.io/react-icons


const hiddenDocTypes = listItem => ![
    'siteSettings',
    'route',
    'navItem',
    'socialConnection',
    'post',
    'author',
    'category',
    'ctaSection',
    'featureList',
    'featureSummary',
    'footer',
    'hero',
    'logoCloud',
    'metrics',
    'team',
    'testimonial',
    'landingPage',
    'callToAction',
    'postList',
    'testimonialSection',
    'genericHeader',
    'form',
    'series',
    'introduction',
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Base')
    .items([
      siteSettings,
      marketingSite,
      blog,
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ])