import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const RichText: Block = {
  slug: 'richText',
  imageURL: '/assets/blocks/RichText.png',
  admin: {
    disableBlockName: true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor(),
    },
  ],
}
