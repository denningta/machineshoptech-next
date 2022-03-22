import S from '@sanity/desk-tool/structure-builder';
import siteSettings from './siteSettings';
import marketingSite from './marketingSite';
import blog from './blog/blog';

// React-icon https://react-icons.github.io/react-icons


const hiddenDocTypes = listItem => ![
    'siteSettings',
    'route',
    'navItem',
    'socialConnection',
    'landingPage',
    'callToAction',
    'service',
    'footer',
    'post',
    'author',
    'category',
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