export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'subHeadline',
      title: 'Sub Headline',
      type: 'string'
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'author'}]
        }
      ]
    }
  ]
}