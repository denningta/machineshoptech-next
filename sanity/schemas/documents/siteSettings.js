export default {
  name: 'siteSettings',
  title: 'settings',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Brand Name',
      description: 'Branding title that appears next to the brand logo',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Brand Icon',
      description: 'The brand icon for the site',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ]
}