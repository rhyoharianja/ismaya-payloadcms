import type { CollectionConfig } from 'payload'
import { Heroes } from '../blocks/Heroes'
import { Galleries } from '../blocks/Galleries'
import { Slider } from "../blocks/Slider";
import { Texts } from "../blocks/Texts";

export const Brands: CollectionConfig = {
    slug: 'brands',
    labels: {
        singular: 'content brand',
        plural: 'Brands'
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
            required: true,
        },
        {
            name: 'status',
            type: 'checkbox',
            required: true,
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
