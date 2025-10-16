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
            blocks: [Hero, Gallery, Slider, RichText],
        },
    ],
}
