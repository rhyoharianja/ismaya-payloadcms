import type { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Gallery } from '../blocks/Gallery'
import { Slider } from '../blocks/Slider'
import { RichText } from "../blocks/RichText";

export const Events: CollectionConfig = {
    slug: 'events',
    labels: {
        singular: 'content event',
        plural: 'Events'
    },
    admin: {
        useAsTitle: 'headline'
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
            required: false,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'startDate',
                    type: 'date',
                    required: true,
                },
                {
                    name: 'endDate',
                    type: 'date',
                    required: true,
                },
            ],
        },
        {
            name: 'active',
            type: 'checkbox',
            required: true,
            defaultValue: false,
        },
        {
            name: 'menu',
            type: 'relationship',
            relationTo: 'menus',
            hasMany: false,
        },
        {
            name: 'blocks',
            type: 'blocks',
            blocks: [Hero, Gallery, Slider, RichText],
        },
    ],
}
