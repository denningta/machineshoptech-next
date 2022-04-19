export default {
  name: 'series',
  title: 'Series',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Series Title',
      type: 'string',
    },
    {
      name: 'posts',
      title: 'Posts in Series',
      description: 'List posts in order',
      type: 'array',
      of: [
        { 
          type: 'reference',
          to: [{ type: 'post' }]
        }
      ]
    }
  ]
}