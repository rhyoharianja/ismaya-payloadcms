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
