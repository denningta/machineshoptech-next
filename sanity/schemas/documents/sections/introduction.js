export default {
  name: 'introduction',
  title: 'Introduction',
  type: 'document',
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Introduction Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'tagline',
      title: 'Introduction Tagline',
      description: 'A short introduction.  Ex: Hi, I\'m Tim',
      type: 'string'

    },
    {
      name: 'headline',
      title: 'Headline',
      description: 'A short headline describing what you do.  Ex: I make websites.',
      type: 'string'
    },
    {
      name: 'introduction',
      title: 'Introduction Text',
      type: 'simplePortableText'
    }
  ]
}