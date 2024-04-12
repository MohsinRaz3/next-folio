import {defineField, defineType} from 'sanity'
import { Search } from 'lucide-react';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  initialValue : {
    title: "Blog Page"
  },

  // groups: [
  //   {
  //     name:"seo",
  //     title: "SEO",
  //     icon: Search,
  //   },
  //   {
  //     name : "page",
  //     title: "Page",
  //   }
  // ],

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.max(60).warning('Title should not exceed 60 characters.')

    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.max(160).warning('Description should not exceed 160 characters.')
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
