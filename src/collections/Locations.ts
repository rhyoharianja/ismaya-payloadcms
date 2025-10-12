import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
    slug: 'locations',
    labels: {
        singular: 'content location',
        plural: 'Locations'
    },
    admin: {
        group: 'Globals',
        useAsTitle: 'name'
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            unique: true,
            index: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'active',
            type: 'checkbox',
            defaultValue: true,
        },
    ],
}
