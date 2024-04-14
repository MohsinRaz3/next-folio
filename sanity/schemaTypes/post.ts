import {defineField, defineType} from 'sanity'
import { Rss, Search } from 'lucide-react';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  // initialValue : {
  //   title: "Blog Page"
  // },
  groups: [
   
    {
      name : "blog",
      title: "Blog Content",
      icon: Rss,
    },
     {
      name:"seo",
      title: "SEO",
      icon: Search,
    },
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.max(60).warning('Title should not exceed 60 characters.'),

      group :'blog'


    }),
    defineField({
      name : 'seo',
      title:'SEO',
      type: 'seoPanel',
      group : 'seo'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.max(160).warning('Description should not exceed 160 characters.'),
      
      group :'blog'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group :'blog'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      group :'blog'

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
      ],
      group :'blog'
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      group :'blog'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group :'blog'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group :'blog'
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
