import type { CollectionConfig } from 'payload'

export const Careers: CollectionConfig = {
    slug: 'careers',
    labels: {
        singular: 'content career',
        plural: 'Careers'
    },
    admin: {
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
            required: true,
        },
        {
            name: 'qualification',
            type: 'textarea',
            required: true,
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'position',
                    type: 'relationship',
                    relationTo: 'positions',
                    hasMany: false,
                    required: true,
                },
                {
                    name: 'location',
                    type: 'relationship',
                    relationTo: 'locations',
                    hasMany: true,
                    required: true,
                },
            ],
        },
        {
            name: 'active',
            type: 'checkbox',
            defaultValue: true,
        },
    ],
}
