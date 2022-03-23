export default {
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'document',
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string'
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          {title: 'Single', value: 'single'},
          {title: 'Two column', value: 'twoColumn'},
          {title: 'Side scroll', value: 'sideScroll'}
        ]
      }
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'testimonial'}]
        }
      ]
    }
  ]
}