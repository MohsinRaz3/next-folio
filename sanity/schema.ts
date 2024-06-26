import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import seoPanel from './schemaTypes/seo'
import customImage from './schemaTypes/customImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,seoPanel, customImage, author, category, blockContent],
}
