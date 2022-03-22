export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Footer title',
      description: 'Internal title of the footer',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Describe the purpose of the footer',
      type: 'string',
    },
    {
      name: 'navItems',
      title: 'Navigation Items',
      description: 'Select the navigation items to display in the footer',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'navItem'}]
      }]
    },
    {
      name: 'socials',
      title: 'Social Connections',
      description: 'Select the social connections to display in the footer',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'socialConnection'}]
      }]
    }
  ]
}