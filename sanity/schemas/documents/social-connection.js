export default {
  name: 'socialConnection',
  title: 'Social Connections',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Social Media Platform',
      description: 'Select the social media platform to connect',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      description: 'Pick the icon for the social media platform',
      type: 'iconPicker',
      options: {
        providers: ["fa", "mdi", "hi", "fa"]
      }
    },
    {
      name: 'url',
      title: 'URL',
      description: 'Enter the url for the specific page on the platform',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }
  ]
}