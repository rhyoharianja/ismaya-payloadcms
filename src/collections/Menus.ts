import type { CollectionConfig } from 'payload'
import { slug } from '../fields/slug'

export const Menus: CollectionConfig = {
    slug: 'menus',
    access: {
        read: () => true,
    },
    admin: {
        group: 'Globals',
        useAsTitle: 'title'
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'parent',
            type: 'relationship',
            relationTo: 'menus' as any,
            hasMany: false
        },
        slug({ trackingField: '' }, {
            name: 'path',
            label: 'Path',
            admin: {
                position: 'sidebar',
                readOnly: true,
            },
        }),
    ],
    hooks: {
        beforeChange: [
            async ({ data, req }) => {
                const slugify = (str: string) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9/-]/g, '').trim();

                let slug = '';
                if (data.title) {
                    slug = slugify(data.title);
                }

                if (data.parent) {
                    // Fetch parent to get its path
                    const parentDoc = await req.payload.findByID({
                        collection: 'menus' as any,
                        id: data.parent,
                    });
                    if (parentDoc && (parentDoc as any).path) {
                        data.path = `${(parentDoc as any).path}/${slug}`;
                    } else {
                        data.path = `/${slug}`;
                    }
                } else {
                    data.path = `/${slug}`;
                }

                return data;
            },
        ],
    },
}
