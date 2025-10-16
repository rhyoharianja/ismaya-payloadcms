# Update Blocks to Singular Names and Types

## Overview
Rename block files from plural to singular, update export names, slugs, and related references to use singular forms. This includes updating imports in payload.config.ts and assuming image paths are updated accordingly.

## Steps
- [ ] Rename block files to singular:
  - Cards.ts -> Card.ts
  - Galleries.ts -> Gallery.ts
  - Heroes.ts -> Hero.ts
  - Milestones.ts -> Milestone.ts
  - Texts.ts -> Text.ts
  - (Carousel.ts and Slider.ts are already singular, no change needed)
- [ ] Update each block file:
  - Change export const [Plural] to export const [Singular]
  - Change slug: '[plural]' to slug: '[singular]'
  - Update imageURL: '/assets/blocks/[plural].png' to '/assets/blocks/[singular].png'
- [ ] Rename image files in public/assets/blocks/ to singular names
- [ ] Update imports in src/payload.config.ts to use singular names
- [ ] Update BlocksFeature array in payload.config.ts to use singular block names
- [ ] Regenerate payload-types.ts (run Payload build or type generation command)
- [ ] Create and run new migrations to update database schema for new singular slugs
- [ ] Test the changes in the CMS to ensure blocks work correctly
