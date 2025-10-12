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
import { Cards } from './blocks/Cards'
import { Heroes } from './blocks/Heroes'
import { Milestones } from './blocks/Milestones'
import { Galleries } from './blocks/Galleries'
import { Texts } from './blocks/Texts'
import { Slider } from './blocks/Slider'
import { SiteConfiguration } from './globals/SiteConfiguration'
import { seoPlugin } from '@payloadcms/plugin-seo'

// import BeforeLogin from './components/Login/BeforeLogin';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // nav: {
    //   'Content': ['pages', 'events', 'news', 'brands'],
    //   'Globals': ['site-configuration', 'menus'],
    // },
    components: {
      graphics: {
        Logo: '/components/payload/logo',
        Icon: '/components/payload/icon',
      },
    },
  },
  collections: [Users, Media, Pages, Positions, Locations, Careers, Categories, News, Events, Brands, Menus],
  globals: [SiteConfiguration],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [Cards, Heroes, Milestones, Galleries, Texts, Slider],
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
