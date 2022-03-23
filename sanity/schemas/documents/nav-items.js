export default {
  name: 'navItem',
  title: 'Navigation Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Navigation Title',
      description: 'Ex: Home, About, etc.  The displayed text of the navigation item.',
      type: 'string',
      validation: Rule => Rule.max(15).warning(`A nav item should not have more than 15 characters.`)
    },
    {
      name: 'icon',
      title: 'Icon',
      description: 'Icon selector from google fonts library https://fonts.google.com/icons?selected=Material+Icons',
      type: 'string'
    },
    {
      name: 'route',
      title: 'Route',
      description: 'When the nav item is clicked, where should the user be sent?',
      type: 'reference',
      to: [
        {type: 'landingPage'},
        {type: 'post'}
      ]
    }
  ]
}