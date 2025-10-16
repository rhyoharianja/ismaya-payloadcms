import type { Block } from 'payload'

export const Slider: Block = {
    slug: 'slider',
    imageURL: '/assets/blocks/slider.png',
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
            type: 'textarea',
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
            name: 'itemType',
            type: 'select',
            options: [
                { label: 'One', value: 'one' },
                { label: 'Two', value: 'two' },
                { label: 'Three', value: 'three' },
                { label: 'Four', value: 'four' },
                { label: 'Five', value: 'five' },
                { label: 'Six', value: 'six' },
                { label: 'Seven', value: 'seven' },
            ],
            required: true,
        },
        {
            name: 'items',
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
