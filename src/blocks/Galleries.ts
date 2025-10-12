import type { Block } from 'payload'

export const Galleries: Block = {
    slug: 'galleries',
    imageURL: '/assets/blocks/galleries.png',
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
            name: 'images',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
        {
            name: 'style',
            type: 'select',
            options: [
                { label: 'Grid', value: 'grid' },
                { label: 'Carousel', value: 'carousel' },
                { label: 'Masonry', value: 'masonry' },
            ],
            required: true,
        },
    ],
}
