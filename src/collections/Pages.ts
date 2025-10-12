import type { CollectionConfig } from 'payload'
import type { User } from '@/payload-types'
import { Cards } from '../blocks/Cards'
import { Heroes } from '../blocks/Heroes'
import { Milestones } from '../blocks/Milestones'
import { Galleries } from '../blocks/Galleries'
import { Texts } from '../blocks/Texts'
import { Carousel } from '../blocks/Carousel'
import { Slider } from '../blocks/Slider'
import { slug } from '../fields/slug'
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'headline'
  },
  versions: true,
  defaultPopulate: {
    slug: true,
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => user && user.roles?.some(role => ['editor', 'admin', 'webAdmin'].includes(role)) || false,
    update: ({ req: { user } }) => user && user.roles?.some(role => ['editor', 'admin', 'webAdmin'].includes(role)) || false,
    delete: ({ req: { user } }) => user && user.roles?.includes('admin') || false,
  },
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        if (req.user && !req.user.roles?.includes('admin')) {
          if (!['draft', 'request-review'].includes(data.status)) {
            throw new Error('Only admin can set other statuses')
          }
        }
        return data
      }
    ]
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'headline',
              type: 'text',
              required: true,
            },
            slug({ trackingField: 'headline' }),
            {
              name: 'tagline',
              type: 'text',
              required: true,
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Request Review', value: 'request-review' },
                { label: 'On Review', value: 'on-review' },
                { label: 'Publish', value: 'publish' },
                { label: 'Unpublish', value: 'unpublish' },
                { label: 'Schedule', value: 'schedule' },
              ],
              required: true,
            },
            {
              name: 'startDateTime',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayAndTime',
                },
                condition: (data) => data.status === 'schedule',
              },
            },
            {
              name: 'endDateTime',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayAndTime',
                },
                condition: (data) => data.status === 'schedule',
              },
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
              blocks: [Cards, Heroes, Milestones, Galleries, Texts, Carousel, Slider],
            },
          ]
        },
        {
          label: 'SEO',
          name: 'meta',
          fields: [
            MetaTitleField({
              hasGenerateFn: true,
              overrides: {
                label: 'Title'
              }
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
              overrides: {
                label: 'Description'
              }
            }),
            MetaImageField({
              relationTo: 'media'
            }),
            {
              type: 'text',
              name: 'canonicalUrl',
              label: 'Canonical URL',
              hooks: {
                beforeChange: [
                  async ({ data, value }) => !value ? `https://example.com/posts/${data?.slug}` : value
                ]
              }
            },
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.headline',
              descriptionPath: 'meta.tagline',
            }),
            OverviewField({
              titlePath: 'meta.headline',
              descriptionPath: 'meta.tagline',
              imagePath: 'meta.image',
            })
          ]
        },
      ]
    },
  ],
}


