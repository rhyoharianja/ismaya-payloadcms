import type { Block } from 'payload';

export const Carousel: Block = {
    slug: 'carousel',
    imageURL: '/assets/blocks/carousel.png',
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
                'news',
                'events',
                'brands',
            ],
            admin: {
                condition: (_, siblingData) => siblingData.collection,
            },
        },
    ],
};
