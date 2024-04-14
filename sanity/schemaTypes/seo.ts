import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'seoPanel',
    title: 'SEO',
    type: 'object',
    fields: [
      defineField({
        name: 'seoTitle',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'seoDescription',
        title: 'Description',
        type: 'string',
      }),
      defineField({
        name: 'keywords',
        title: 'Keywords',
        type: 'array',
        of: [{ type: 'string' }],
      
      }),
      defineField({
        name: 'ogimage',
        title: 'OG Image',
        type: 'customImage',
      }),
    ],
  });