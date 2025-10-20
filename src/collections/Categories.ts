import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
    slug: 'categories',
    labels: {
        singular: 'content category',
        plural: 'Categories'
    },
    admin: {
        group: 'Globals',
        useAsTitle: 'title'
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
            required: false,
        },
        {
            name: 'group',
            type: 'select',
            options: [
                { label: 'Brands', value: 'brands' },
                { label: 'Events', value: 'events' },
            ],
            required: false,
        },
    ],
}
