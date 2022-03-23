export default {
  name: 'ctaSection',
  title: 'Call-to-Action Section',
  type: 'document',
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title',
      description: 'Internal description for this header',
      type: 'string'
    },
    {
      name: 'headline',
      title: 'Main Marketing Headline',
      description: 'The main text in the CTA section',
      type: 'string'
    },
    {
      name: 'subHeadline',
      title: 'Sub Headline',
      description: 'A longer description that appears just beneath the main marketing headline.',
      type: 'string'
    },
    {
      name: 'callToAction',
      title: 'Call-to-Action',
      description: 'Create a primary and/or secondary CTA for this section',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'callToAction'}]
      }],
      validation: Rule => Rule.max(2)
    }
  ]
}