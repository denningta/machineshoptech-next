export default {
  name: 'route',
  title: 'Route',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Rote Title',
      description: 'Internal, human-readable name for this route',
      type: 'string'
    },
    {
      name: 'route',
      title: 'Route',
      description: 'Hyphenated name of the route.  "root" is a reserved keyword for the root of the domain (eg. https://domain.com) ',
      type: 'slug',
      options: {
        maxLength: 98
      }
    },
  ]
}