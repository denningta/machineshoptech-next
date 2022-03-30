export default {
  name: 'genericHeader',
  title: 'Generic Header',
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
      description: 'The main text in the header section',
      type: 'simplePortableText'
    },
    {
      name: 'subHeadline',
      title: 'Sub Headline',
      description: 'A longer description that appears just beneath the main headline.',
      type: 'simplePortableText'
    }
  ]
}