import type { GlobalConfig } from 'payload'
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from '@payloadcms/plugin-seo/fields'
import { colorPickerField } from '@innovixx/payload-color-picker-field'

export const SiteConfiguration: GlobalConfig = {
  slug: 'site-configuration',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              label: 'Website Logo',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'favicon',
              type: 'upload',
              label: 'Website Favicon',
              relationTo: 'media',
              required: true,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'siteName',
                  type: 'text',
                  label: 'Website Name',
                  required: true,
                },
                {
                  name: 'baseUrl',
                  type: 'text',
                  label: 'Website URL',
                  required: true,
                },
              ],
            },
            {
              type: 'row',
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
              ],
            },
            {
              type: 'row',
              fields: [
                colorPickerField({
                  name: 'primary_color',
                  label: 'Primary Color',
                }),
                colorPickerField({
                  name: 'secondary_color',
                  label: 'Secondary Color'
                }),
                colorPickerField({
                  name: 'success_color',
                  label: 'Success Color'
                }),
              ],
            },
            {
              type: 'row',
              fields: [
                colorPickerField({
                  name: 'warning_color',
                  label: 'Warning Color'
                }),
                colorPickerField({
                  name: 'danger_color',
                  label: 'Danger Color'
                }),
                colorPickerField({
                  name: 'info_color',
                  label: 'Info Color'
                }),
              ],
            },
          ],
        },
        {
          label: 'Header',
          fields: [
            {
              name: 'header',
              type: 'group',
              fields: [
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'menus',
                  type: 'relationship',
                  relationTo: 'menus',
                  hasMany: true,
                  required: true,
                },
                {
                  name: 'button',
                  type: 'group',
                  fields: [
                    {
                      name: 'text',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'link',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Footer',
          fields: [
            {
              name: 'footer',
              type: 'group',
              fields: [
                {
                  name: 'left',
                  type: 'group',
                  fields: [
                    {
                      name: 'logo',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                    },
                    {
                      name: 'text',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'socialMedia',
                      type: 'array',
                      fields: [
                        {
                          name: 'icon',
                          type: 'upload',
                          relationTo: 'media',
                          required: true,
                        },
                        {
                          name: 'url',
                          type: 'text',
                          required: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'right',
                  type: 'group',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'subtitle',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'mapUrl',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'bottom',
                  type: 'group',
                  fields: [
                    {
                      name: 'copyright',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'reserve',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'headline',
              descriptionPath: 'tagline',
            }),
            OverviewField({
              titlePath: 'headline',
              descriptionPath: 'tagline',
              imagePath: 'logo',
            }),
          ],
        },
      ],
    },
  ],
}
