import type { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',
  imageURL: '/assets/blocks/cta.jpg',
  admin: {
    disableBlockName: true
  },
  labels: {
    singular: 'CTA',
    plural: 'CTA'
  },
  fields: [
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'platform',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
  ],
}
