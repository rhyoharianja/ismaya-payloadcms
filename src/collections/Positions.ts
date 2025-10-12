import type { CollectionConfig } from 'payload'

export const Positions: CollectionConfig = {
    slug: 'positions',
    labels: {
        singular: 'content position',
        plural: 'Positions'
    },
    admin: {
        group: 'Globals',
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
