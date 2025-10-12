import type { Block } from 'payload'

export const Milestones: Block = {
    slug: 'milestones',
    imageURL: '/assets/blocks/milestones.png',
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
                    name: 'value',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'text',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}
