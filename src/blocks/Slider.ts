import type { Block } from 'payload'

export const Slider: Block = {
    slug: 'slider',
    imageURL: '/assets/blocks/slider.png',
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
            name: 'collection',
            type: 'select',
            options: [
                { label: 'Pages', value: 'pages' },
                { label: 'Careers', value: 'careers' },
                { label: 'News', value: 'news' },
                { label: 'Events', value: 'events' },
                { label: 'Brands', value: 'brands' },
            ],
            required: true,
        },
        {
            name: 'relation',
            type: 'relationship',
            label: 'Items',
            hasMany: true,
            relationTo: [
                'pages',
                'careers',
                'news',
                'events',
                'brands',
            ],
            admin: {
                condition: (_, siblingData) => siblingData.collection,
            },
        },
    ],
}
