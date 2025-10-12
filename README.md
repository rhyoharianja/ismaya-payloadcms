# Payload CMS Project with Next.js and PostgreSQL

This project is built using Payload CMS version 3.0+ (the latest stable version as of the setup), integrated with Next.js for the frontend and admin panel. It uses PostgreSQL as the database via the `@payloadcms/db-postgres` adapter. The project includes collections for Users, Media, Pages, Menus, Brands, Events, News, and more, along with blocks for rich content, globals for site configuration, and custom fields/hooks.

## Features
- Headless CMS with admin UI.
- PostgreSQL database integration.
- Rich text editing with Lexical editor.
- Custom blocks (Cards, Heroes, Texts, etc.) for page building.
- Relationship fields with custom display (e.g., using headline).
- Auto-generated slugs and paths for menus/pages.
- Authentication and access control.
- Tailwind CSS for styling.

## Prerequisites
- Node.js 18+.
- PostgreSQL 12+ installed and running (e.g., via Docker, Homebrew, or a cloud service like Supabase/Neon).
- pnpm (package manager used in this project).
- Git.

## Installation with PostgreSQL

1. **Clone or Download the Project**:
   ```
   git clone <your-repo-url>
   cd ismanya  # or your project folder
   ```

2. **Install Dependencies**:
   Use pnpm to install all packages:
   ```
   pnpm install
   ```

3. **Set Up Environment Variables**:
   Copy `test.env` to `.env` and update it:
   ```
   cp test.env .env
   ```
   
   Edit `.env` with your values:
   ```
   # Payload secret (generate a strong one, e.g., using openssl rand -hex 32)
   PAYLOAD_SECRET=your-strong-secret-here
   
   # PostgreSQL connection string
   DATABASE_URI=postgresql://username:password@localhost:5432/your_database_name?schema=public
   
   # Optional: Next.js and other configs
   NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3000
   ```
   
   - Replace `username`, `password`, `localhost:5432`, and `your_database_name` with your PostgreSQL details.
   - If using Docker for Postgres, see the `docker-compose.yml` for a quick setup (run `docker-compose up -d` to start Postgres).

4. **Database Setup**:
   - Ensure your PostgreSQL database exists. Create it if needed:
     ```
     createdb your_database_name  # Using psql or pgAdmin
     ```
   - Payload will handle schema creation and migrations on first run.

5. **Run Migrations** (if needed):
   Payload auto-migrates on startup, but for manual control:
   ```
   pnpm payload migrate
   ```

## Setup and Configuration

1. **Start the Development Server**:
   ```
   pnpm dev
   ```
   - This starts Next.js on `http://localhost:3000`.
   - The Payload admin panel is available at `http://localhost:3000/admin`.
   - Access the frontend routes via `/` or other app routes.

2. **Initial Admin User Setup**:
   - On first visit to `/admin`, create an admin user.
   - Use the email and password to log in.

3. **Configuration Overview**:
   - **payload.config.ts**: Main config file. Defines collections, globals, plugins (e.g., postgresAdapter, lexicalEditor, payloadCloudPlugin), and admin settings.
     - Collections: Users, Media, Pages, Menus, etc.
     - Globals: SiteConfiguration, Menus.
     - Database: PostgreSQL adapter with connection from `DATABASE_URI`.
     - Editor: Lexical rich text.
   - **Collections** (src/collections/): Define data models (e.g., Pages.ts with fields like headline, status, blocks array).
   - **Globals** (src/globals/): Singleton configs (e.g., SiteConfiguration.ts with logo, colors).
   - **Blocks** (src/blocks/): Reusable components for rich content (e.g., Texts.ts with title and richText).
   - **Fields** (src/fields/): Custom fields like slug.ts for auto-generation.
   - **Hooks**: Used in collections (e.g., beforeChange in Menus.ts for path generation).
   - **Access Control**: Defined in collection configs (e.g., read: () => true for public access).
   - **TypeScript**: Types auto-generated in `src/payload-types.ts`.

4. **Customizations**:
   - **Admin UI**: Customize nav in `payload.config.ts` under `admin.nav`.
   - **Relationships**: Use `admin.useAsTitle: 'headline'` in relationship fields to display related items by headline.
   - **Slugs/Paths**: Auto-generated via hooks (e.g., Menus path is read-only and prefixed with parent).
   - **Blocks Labels**: Static labels set in block configs (e.g., 'Text Block').
   - **Styling**: Tailwind CSS in `tailwind.config.ts`; custom styles in `src/styles/payloadStyles.css`.

5. **Production Build**:
   ```
   pnpm build
   pnpm start
   ```
   - Set `NODE_ENV=production` in `.env`.

6. **Docker Setup** (Optional):
   - Use `docker-compose.yml` to spin up Postgres:
     ```
     docker-compose up -d postgres
     ```
   - Update `DATABASE_URI` to `postgresql://postgres:password@postgres:5432/dbname`.

## How to Add Content Collections

1. **Create a New Collection File**:
   - In `src/collections/`, create `NewCollection.ts`:
     ```typescript
     import type { CollectionConfig } from 'payload'

     export const NewCollection: CollectionConfig = {
       slug: 'new-collection',
       fields: [
         {
           name: 'title',
           type: 'text',
           required: true,
         },
         // Add more fields: text, richText, upload, relationship, blocks, etc.
         {
           name: 'content',
           type: 'richText',
           editor: lexicalEditor(),
         },
         {
           name: 'relatedPage',
           type: 'relationship',
           relationTo: 'pages',
           admin: {
             useAsTitle: 'headline',  // Displays headline from related page
           },
         },
       ],
       access: {
         read: () => true,  // Public read; customize as needed
       },
       admin: {
         useAsTitle: 'title',  // Field to show in admin list
         group: 'Content',  // Group in sidebar
       },
     }
     ```

2. **Register in payload.config.ts**:
   - Import: `import { NewCollection } from './collections/NewCollection'`
   - Add to `collections` array: `collections: [Users, Media, Pages, NewCollection, ...]`

3. **Add Hooks (Optional)**:
   - For auto-slug: Use `slug` field from `src/fields/slug.ts`.
   - For beforeChange (e.g., generate path): Add to `hooks.beforeChange`.

4. **Regenerate Types**:
   - Restart dev server or run `pnpm payload generate:types`.

5. **Test the Collection**:
   - Visit `/admin/collections/new-collection`.
   - Create entries and verify relationships/fields work.

6. **For Blocks in Collections**:
   - Add a blocks field:
     ```typescript
     {
       name: 'layout',
       type: 'blocks',
       blocks: [Texts, Cards, Heroes],  // Import from src/blocks/
     }
     ```

## Testing and Development

- **Unit Tests**: Run `pnpm test` (Vitest).
- **E2E Tests**: Run `pnpm playwright test` (Playwright).
- **Linting**: `pnpm lint`.
- **Type Check**: `pnpm tsc --noEmit`.

## Troubleshooting

- **Database Connection Error**: Verify `DATABASE_URI` and Postgres is running.
- **Migration Issues**: Run `pnpm payload migrate`.
- **Admin Not Loading**: Check `PAYLOAD_SECRET` and clear browser cache.
- **Type Errors**: Regenerate types with dev server restart.
- **Custom Fields Not Working**: Ensure imports in payload.config.ts.

## Deployment

- **Vercel/Netlify**: Deploy Next.js app; set env vars.
- **Database**: Use cloud Postgres (e.g., Supabase).
- **Plugins**: Enable `@payloadcms/payload-cloud` for hosted storage.

For more details, refer to [Payload CMS Docs](https://payloadcms.com/docs/getting-started/what-is-payload).

Happy building!
