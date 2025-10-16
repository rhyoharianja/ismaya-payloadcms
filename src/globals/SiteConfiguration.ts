import type { GlobalConfig } from 'payload'
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from '@payloadcms/plugin-seo/fields'
import { color } from '../fields/color'

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
                color({
                  name: 'primary_color',
                  label: 'Primary Color',
                }),
                color({
                  name: 'secondary_color',
                  label: 'Secondary Color',
                }),
                color({
                  name: 'success_color',
                  label: 'Success Color',
                }),
              ],
            },
            {
              type: 'row',
              fields: [
                color({
                  name: 'warning_color',
                  label: 'Warning Color',
                }),
                color({
                  name: 'danger_color',
                  label: 'Danger Color',
                }),
                color({
                  name: 'info_color',
                  label: 'Info Color',
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
                          name: 'platform',
                          type: 'text',
                          required: true,
                        },
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
