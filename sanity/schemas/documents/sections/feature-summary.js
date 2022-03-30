export default {
  title: 'Feature Summary',
  name: 'featureSummary',
  type: 'document',
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string'
    },
    { 
      name: 'title',
      title: 'Feature Title',
      description: 'Short title of the feature',
      type: 'string',
    },
    { 
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'subHeadline',
      title: 'Sub Headline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'A short description of the feature',
      type: 'blockContent',
    },
    {
      name: 'icon',
      title: 'Feature Icon',
      description: 'Select an icon to display with the feature',
      type: 'image',
    },
    {
      name: 'callsToAction',
      title: 'Call to Action',
      description: 'Select the call-to-action to associate with this feature.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'callToAction'}]
        }
      ]
    },
    {
      name: 'image',
      title: 'Image',
      description: 'Visual description of the feature',
      type: 'image',
      options: {
        hotspot: true,
      }
    },

  ]
}