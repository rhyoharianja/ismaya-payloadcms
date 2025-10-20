import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'email',
    },
    auth: true,
    defaultPopulate: {
        slug: true,
        name: true,
    },
    fields: [
        {
            name: 'avatar',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'roles',
            type: 'select',
            hasMany: true,
            saveToJWT: true,
            options: [
                { label: 'Administrator', value: 'admin' },
                { label: 'Admin Web', value: 'webAdmin' },
                { label: 'Editor', value: 'editor' },
                { label: 'User', value: 'user' },
            ],
            // hooks: {
            //     beforeChange: [protectRoles]
            // },
            // access: {
            //     update: ({ req: { user } }) => checkRole(['admin'], user as User),
            // },
        },
        {
            name: 'active',
            type: 'checkbox',
            defaultValue: true,
        }
    ],
}
