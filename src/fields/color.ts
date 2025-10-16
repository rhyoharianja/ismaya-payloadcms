import lodash from 'lodash'
import { Field } from 'payload'

const { merge } = lodash

type Color = (overrides?: Partial<Field>) => Field

export const color: Color = (overrides) =>
  merge<Field, Partial<Field> | undefined>(
    {
      name: 'color',
      type: 'text',
      admin: {
        components: {
          Field: {
            path: './ui/colorInput',
            exportName: 'colorInput',
          },
        },
      },
    },
    overrides,
  )
