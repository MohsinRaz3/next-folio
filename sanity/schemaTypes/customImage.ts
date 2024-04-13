import {defineField, defineType} from 'sanity'

export default defineType({
    title: 'Image',
    name:'customImage',
    type:'image',
    options: {
        hotspot: true,
    },
    fields :[
       defineField( {
            title: 'Alt Text',
            name: "alt",
            type: 'string',
            validation : (Rule)=> Rule.error('Alt text cannot be empty').required(),
         
        })
    ]
})