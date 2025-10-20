import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users/config'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Brands } from './collections/Brands'
import { Menus } from './collections/Menus'
import { Positions } from './collections/Positions'
import { Locations } from './collections/Locations'
import { Careers } from './collections/Careers'
import { Categories } from './collections/Categories'
import { News } from './collections/News'
import { Events } from './collections/Events'
import { TwoColumns } from './blocks/TwoColumns'
import { Hero } from './blocks/Hero'
import { Milestone } from './blocks/Milestone'
import { Gallery } from './blocks/Gallery'
import { RichText } from './blocks/RichText'
import { Slider } from './blocks/Slider'
import { HeroFullscreen } from './blocks/HeroFullscreen'
import { SiteConfiguration } from './globals/SiteConfiguration'
import { seoPlugin } from '@payloadcms/plugin-seo'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    theme: 'light',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '/components/payload/logo',
        Icon: '/components/payload/icon',
      },
      beforeLogin: ['/components/Login/AfterLogin'],
    },
  },
  graphQL: {
    disable: true,
  },
  collections: [Users, Media, Pages, Positions, Locations, Careers, Categories, News, Events, Brands, Menus],
  globals: [SiteConfiguration],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [TwoColumns, Hero, Milestone, Gallery, RichText, Slider, HeroFullscreen],
      }),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    seoPlugin({
      uploadsCollection: 'media',
    }),
  ],
})
