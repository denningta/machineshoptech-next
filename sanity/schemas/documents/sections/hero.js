export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Internal Title',
      description: 'Internal description for this header',
      type: 'string'
    },
    {
      name: 'headline',
      title: 'Marketing Headline',
      description: 'The main text in the hero section',
      type: 'string'
    },
    {
      name: 'subHeadline',
      title: 'Sub Headline',
      description: 'A longer description that appears just beneath the main marketing headline.',
      type: 'simplePortableText'
    },
    {
      name: 'image',
      title: 'Hero Section Image',
      description: 'The image or logo to be used in the hero section',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'callsToAction',
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