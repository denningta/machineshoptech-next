export default {
  name: 'callToAction',
  title: 'Call-to-Action',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'CTA Title',
      description: 'Title this call-to-action',
      type: 'string',
    },
    {
      name: 'description',
      title: 'CTA description',
      description: 'Describe the purpose of this call-to-action',
      type: 'string'
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      description: 'The text that will be displayed in the button',
      type: 'string',
      validation: Rule => Rule.max(50).warning(`The button text of a call-to-action should not exceed 50 characters.`)
    },
    {
      name: 'style',
      title: 'Style',
      description: 'define the style of the call-to-action',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Request Email', value: 'email' }
        ]
      }
    },
    {
      name: 'route',
      title: 'Route',
      description: 'Select the route or blog post to navigate to when this CTA is clicked.',
      type: 'reference',
      to: [
        {type: 'route'},
        {type: 'post'}
      ]
    },

  ]
}