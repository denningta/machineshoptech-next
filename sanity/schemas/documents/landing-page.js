export default {
  title: 'Landing Page',
  name: 'landingPage',
  type: 'document',
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title',
      description: 'Name the page.  Not visible to the outside world.',
      type: 'string'
    },
    {
      name: 'internalDescription',
      title: 'Internal Description',
      description: 'Describe the purpose of the page.  Not visible to the outside world.',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Url Slug',
      description: 'Intended route of the page.  "root" is a reserved keyword for the root of the domain.',
      type: 'slug',
      options: {
        source: 'internalTitle'
      }
    },
    {
      name: 'header',
      title: 'Header',
      description: 'Select the header to display at the top of this page',
      type: 'reference',
      to: [
        {type: 'hero'},
        {type: 'ctaSection'},
        {type: 'genericHeader'},
      ]
    },
    {
      name: 'sections',
      title: 'Sections',
      description: 'Select and arrange sections in the order they should appear',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'featureList'},
          {type: 'featureSummary'},
          {type: 'logoCloud'},
          {type: 'team'},
          {type: 'metrics'},
          {type: 'ctaSection'},
          {type: 'postList'},
          {type: 'form'},
        ]
      }]
    },
    {
      name: 'footer',
      title: 'Footer',
      description: 'Select the footer to display at the bottom of the page',
      type: 'reference',
      to: [
        {type: 'footer'}
      ]
    },
    {
      name: 'navItems',
      title: 'Navigation Items',
      description: 'Navigation items to display on the site',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'navItem'}]
        }
      ]
    }
  ]
}