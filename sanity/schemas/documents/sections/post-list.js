export default {
  name: 'postList',
  title: 'Post List',
  type: 'document',
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'subHeadline',
      title: 'Sub-headline',
      type: 'string'
    },
    {
      name: 'listType',
      title: 'List Type',
      type: 'string',
      options: {
        list: [
          {title: 'Latest', value: 'latest'},
          {title: 'Featured', value: 'featured'},
          {title: 'Custom', value: 'custom'}
        ]
      }
    },
    {
      name: 'posts',
      title: 'Custom Posts',
      hidden: ({document}) => !(document.listType === 'custom'),
      type: 'array',
      of: [{ 
        type: 'reference',
        to: [{type: 'post'}]
      }]
    }
  ]
}