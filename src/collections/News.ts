import type { CollectionConfig } from 'payload'
import { Heroes } from '../blocks/Heroes'
import { Galleries } from '../blocks/Galleries'
import { Slider } from '../blocks/Slider'
import { Texts } from "../blocks/Texts";

export const News: CollectionConfig = {
    slug: 'news',
    labels: {
        singular: 'content news',
        plural: 'News'
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
            name: 'active',
            type: 'checkbox',
            required: true,
            defaultValue: false,
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            required: false,
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
            blocks: [Heroes, Galleries, Slider, Texts],
        },
    ],
}
