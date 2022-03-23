export default {
  title: 'Metrics',
  name: 'metrics',
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
      description: 'Short title describing the metrics',
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
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        {
          name: 'metric',
          title: 'Metric Name',
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Metric Number',
              description: 'ex: 150',
              type: 'string'
            },
            {
              name: 'name',
              title: 'Metric Name',
              description: 'ex: Miles per hour',
              type: 'string'
            }
          ]
        },
      ]
    }

  ]
}