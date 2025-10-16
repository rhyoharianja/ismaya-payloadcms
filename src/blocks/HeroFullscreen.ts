import type { Block } from 'payload'
import { colorPickerField } from '@innovixx/payload-color-picker-field'

export const HeroFullscreen: Block = {
  slug: 'heroFullscreen',
  imageURL: '/assets/blocks/heroFullscreen.png',
  admin: {
    disableBlockName: true
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'smallTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'bigTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'background',
      type: 'group',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Video', value: 'video' },
            { label: 'Color', value: 'color' },
          ],
          required: true,
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'image' || siblingData.type === 'video',
          }
        },
        colorPickerField({
          name: 'color',
          label: 'Color',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'color',
          }
        }),
      ],
    },
  ]
}
