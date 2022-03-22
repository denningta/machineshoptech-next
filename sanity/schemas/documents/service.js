export default {
  title: 'Service',
  name: 'service',
  type: 'document',
  groups: [
    { name: 'summary', title: 'Landing Page Summary' },
    { name: 'details', title: 'Full Page' }
  ],
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string'
    },
    { 
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'summary'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'subtitle',
      title: 'SubTitle',
      type: 'string',
      group: 'summary'
    },
    {
      name: 'icon',
      title: 'Google Fonts Icon',
      description: 'Icon selector from https://fonts.google.com/icons?selected=Material+Icons',
      type: 'string',
      group: 'summary'
    },
    {
      name: 'callToAction',
      title: 'Call to Action',
      description: 'Select the call-to-action to associate with this service.',
      type: 'reference',
      to: [
        {type: 'callToAction'}
      ]
    },
    {
      name: 'image',
      title: 'Image',
      description: 'Visual description of the service',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'summary'
    },
    {
      name: 'description',
      title: 'Description',
      description: 'A short description of the service',
      type: 'blockContent',
      group: 'summary'
    },
  ]
}