import type { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Gallery } from '../blocks/Gallery'
import { Slider } from "../blocks/Slider";
import { RichText } from "../blocks/RichText";

export const Brands: CollectionConfig = {
    slug: 'brands',
    labels: {
        singular: 'content brand',
        plural: 'Brands'
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'menu',
            type: 'relationship',
            relationTo: 'menus',
            hasMany: false,
        },
        {
            name: 'category',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: false,
            filterOptions: {
                group: {
                    equals: 'brands',
                },
            },
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },
        {
            name: 'blocks',
            type: 'blocks',
            blocks: [Hero, Gallery, Slider, RichText],
        },
        {
            name: 'locations',
            type: 'array',
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
                    type: 'array',
                    fields: [
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
                    ],
                },
                {
                    name: 'contact',
                    type: 'array',
                    fields: [
                        {
                            name: 'type',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'value',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
            ],
        },
        {
            name: 'status',
            type: 'checkbox',
            required: true,
        },
    ],
}
