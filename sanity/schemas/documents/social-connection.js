export default {
  name: 'socialConnection',
  title: 'Social Connections',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Social Media Type',
      description: 'Select the social media platform to connect',
      type: 'string',
      options: {
        list:[
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'LinkedIn', value: 'linkedin'}
        ]
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