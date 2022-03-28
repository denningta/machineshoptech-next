export default {
  name: 'featureList',
  title: 'Feature List',
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
      description: 'Short title of the feature set',
      type: 'string'
    },
    {
      name: 'headline',
      title: 'Main Feature Headline',
      description: 'A short headline describing the feature set',
      type: 'string'
    },
    {
      name: 'subHeadline',
      title: 'Sub-Headline',
      description: 'A sub-headline that adds more context to the headline',
      type: 'string'
    },
    {
      name: 'features',
      title: 'Features',
      description: 'Add features to this description',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'featureTitle',
              title: 'Feature Title',
              description: 'Title the feature',
              type: 'string'
            },
            {
              name: 'featureDescription',
              title: 'Feature Description',
              description: 'Describe the feature',
              type: 'string'
            },
            {
              name: 'icon',
              title: 'Feature Icon',
              type: 'image'
            }
          ]
        }
      ]
    }
  ]
}