export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Attestant Name',
      description: 'Who is giving the tetimonial',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Attestant Title and Company',
      description: 'Ex: Tech Lead at Google',
      type: 'string'
    },
    {
      name: 'avatar',
      title: 'Attestant Avatar',
      type: 'image'
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'simplePortableText'
    }
  ]
}