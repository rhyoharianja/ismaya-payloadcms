import type { Block } from 'payload'

export const Milestone: Block = {
    slug: 'milestone',
    imageURL: '/assets/blocks/milestone.png',
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
            name: 'description',
            type: 'text',
            required: true,
        },
        {
            name: 'background',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },
        {
            name: 'items',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'appendTitle',
                    type: 'text',
                    required: false,
                },
                {
                    name: 'description',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}
