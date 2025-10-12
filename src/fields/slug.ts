import lodash from 'lodash'
import { Field } from 'payload'

const { merge } = lodash

type Slug = (options?: { trackingField?: string }, overrides?: Partial<Field>) => Field

export const slug: Slug = ({ trackingField = 'title' } = {}, overrides) =>
    merge<Field, Partial<Field> | undefined>(
        {
            name: 'slug',
            unique: true,
            type: 'text',
            admin: {
                position: 'sidebar',
                components: {
                    Field: {
                        path: './ui/slugInput',
                        exportName: 'slugInput',
                        clientProps: {
                            trackingField,
                            fieldName: (overrides as any)?.name || 'slug',
                        },
                    },
                },
            },
        },
        overrides,
    )
