import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { color } from '../fields/color'

export const TwoColumns: Block = {
    slug: 'twoColumns',
    imageURL: '/assets/blocks/twoColumns.png',
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
            name: 'asset',
            type: 'group',
            fields: [
                {
                    name: 'type',
                    type: 'select',
                    options: [
                        { label: 'Image', value: 'image' },
                        { label: 'Video', value: 'video' },
                        { label: 'Color', value: 'color' },
                    ],
                    required: true,
                },
                {
                    name: 'media',
                    type: 'upload',
                    relationTo: 'media',
                    admin: {
                        condition: (data, siblingData) => siblingData.type === 'image' || siblingData.type === 'video',
                    }
                },
                color({
                    name: 'color',
                    label: 'Color',
                    admin: {
                        condition: (data: any, siblingData: any) => siblingData.type === 'color',
                    }
                }),
            ],
        },
        {
            name: 'assetPosition',
            type: 'select',
            options: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
            ],
            required: true,
        },
        {
            name: 'description',
            type: 'richText',
            required: true,
            editor: lexicalEditor(),
        },
        {
            name: 'descriptionShort',
            type: 'text',
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
