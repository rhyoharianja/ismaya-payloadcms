import type { Block } from 'payload'

export const Gallery: Block = {
    slug: 'gallery',
    imageURL: '/assets/blocks/gallery.png',
    admin: {
        disableBlockName: true
    },
    fields: [
        {
            name: 'type',
            type: 'select',
            options: [
                { label: 'Dark', value: 'dark' },
                { label: 'Light', value: 'light' },
                { label: 'Auto', value: 'auto' },
            ],
            required: true,
        },
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
            required: false,
        },
        {
            name: 'actions',
            type: 'array',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'url',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}
