import type { CollectionConfig } from 'payload'
import { TwoColumns } from '../blocks/TwoColumns'
import { Hero } from '../blocks/Hero'
import { HeroFullscreen } from '../blocks/HeroFullscreen'
import { Milestone } from '../blocks/Milestone'
import { Gallery } from '../blocks/Gallery'
import { RichText } from '../blocks/RichText'
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
    useAsTitle: 'title'
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
          label: 'Base',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            slug({ trackingField: 'title' }),
            {
              name: 'description',
              type: 'text',
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
          ]
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'blocks',
              label: 'Blocks',
              blocks: [TwoColumns, Hero, HeroFullscreen, Milestone, Gallery, RichText, Carousel, Slider],
              admin: {
                initCollapsed: false,
              },
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


