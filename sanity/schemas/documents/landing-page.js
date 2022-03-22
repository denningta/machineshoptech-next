export default {
  title: 'Landing Page',
  
  name: 'landingPage',
  type: 'document',
  fields: [
    {
      name: 'pageName',
      title: 'Page Name',
      description: 'Name the page.  Not visible to the outside world.',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Describe the purpose of the page.  Not visible to the outside world.',
      type: 'string',
    },
    {
      name: 'route',
      title: 'Route',
      description: 'Intended route of the page',
      type: 'reference',
      to: [{type: 'route'}]
    },
    {
      name: 'headline',
      title: 'Headline',
      description: 'The marketing headline.',
      type: 'string',
      validation: Rule => Rule.max(100).warning(`The headline should not have more than 100 characters.`)
    },
    {
      name: 'subHeadline',
      title: 'subHeadline',
      description: 'The marketing sub-headline.',
      type: 'string',
      validation: Rule => Rule.max(200).warning(`The headline should not have more than 200 characters.`)
    },
    {
      name: 'callToAction',
      title: 'Call-to-Action',
      description: 'Assign a call-to-action',
      type: 'reference',
      to: [{type: 'callToAction'}]
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
    },
    {
      name: 'services',
      title: 'Services',
      description: 'Add the services that should be displayed on this page.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'service'}]
        }
      ],
    }, 
    {
      name: 'footer',
      title: 'Footer',
      description: 'Choose the footer to display on this landing page',
      type: 'reference',
      to: [{type: 'footer'}]
    }
  ]
}