import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Texts: Block = {
    slug: 'texts',
    imageURL: '/assets/blocks/texts.png',
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
