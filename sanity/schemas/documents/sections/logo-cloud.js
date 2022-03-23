export default {
  name: 'logoCloud',
  title: 'Logo Cloud',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      description: 'Ex: Trusted by these great businesses',
      type: 'string'
    },
    {
      name: 'companies',
      title: 'Companies',
      type: 'array',
      of: [
        {
          name: 'company',
          title: 'Company',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Company Name',
              type: 'string'
            },
            {
              name: 'logo',
              title: 'Company logo',
              type: 'image'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'iconPicker'
            }
          ]
        }
      ]
    }
  ]
}