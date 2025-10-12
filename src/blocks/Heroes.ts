import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Heroes: Block = {
    slug: 'heroes',
    imageURL: '/assets/blocks/heroes.png',
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
            name: 'content',
            type: 'richText',
            required: true,
            editor: lexicalEditor(),
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'ourLocationsType',
            type: 'select',
            options: [
                { label: 'None', value: 'none' },
                { label: 'Single', value: 'single' },
                { label: 'Multiple', value: 'multiple' },
            ],
            required: true,
        },
        {
            name: 'singleLocation',
            type: 'group',
            admin: {
                condition: (data, siblingData) => siblingData?.ourLocationsType === 'single',
            },
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'location',
                            type: 'group',
                            fields: [
                                {
                                    name: 'address',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'mapsUrl',
                                    type: 'text',
                                    required: true,
                                },
                            ],
                        },
                        {
                            name: 'contact',
                            type: 'group',
                            fields: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'phoneNumber',
                                    type: 'text',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'openHours',
                    type: 'array',
                    fields: [
                        {
                            name: 'days',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'hours',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
            ],
        },
        {
            name: 'multipleLocation',
            type: 'array',
            admin: {
                condition: (data, siblingData) => siblingData?.ourLocationsType === 'multiple',
            },
            fields: [
                {
                    name: 'address',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'mapsUrl',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'openHours',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'contact',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ]
}
