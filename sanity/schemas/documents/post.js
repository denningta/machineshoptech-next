export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      description: 'The text that will display on google search results or socail share cards',
      type: 'simplePortableText'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'featured',
      title: 'Featured Post?',
      description: 'Check to pin this post to the featured list',
      type: 'boolean'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'footerSections',
      title: 'Footer Sections',
      description: 'When the reader is done reading the post, what do you want them to see?',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'ctaSection' },
          { type: 'featureList' },
          { type: 'featureSummary' },
          { type: 'genericHeader' },
          { type: 'hero' },
          { type: 'logoCloud' },
          { type: 'team' },
          { type: 'testimonialSection' },
        ]
      }]
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
