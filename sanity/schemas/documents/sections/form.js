export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Form Title',
      description: 'Title this form',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      description: 'Select the form type',
      type: 'string',
      options: {
        list: ['contact', 'newsletter']
      }
    }
  ]
}