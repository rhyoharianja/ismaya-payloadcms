import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Cards: Block = {
    slug: 'cards',
    imageURL: '/assets/blocks/cards.png',
    admin: {
        disableBlockName: true
    },
    fields: [
        {
            name: 'headline',
            type: 'text',
            required: true,
        },
        {
            name: 'tagline',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
            editor: lexicalEditor(),
        },
        {
            name: 'contentPosition',
            type: 'select',
            options: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
            ],
            required: true,
        },
        {
            name: 'brands',
            type: 'relationship',
            relationTo: 'brands',
            hasMany: true,
        },
    ]
}
