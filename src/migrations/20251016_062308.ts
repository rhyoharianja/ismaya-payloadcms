import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_users_roles" AS ENUM('admin', 'webAdmin', 'editor', 'user');
  CREATE TYPE "public"."enum_pages_blocks_two_columns_asset_type" AS ENUM('image', 'video', 'color');
  CREATE TYPE "public"."enum_pages_blocks_two_columns_asset_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_hero_background_position" AS ENUM('top-left', 'top-right', 'down-left', 'down-right');
  CREATE TYPE "public"."enum_pages_blocks_hero_our_locations_type" AS ENUM('none', 'single', 'multiple');
  CREATE TYPE "public"."enum_pages_blocks_hero_fullscreen_background_type" AS ENUM('image', 'video', 'color');
  CREATE TYPE "public"."enum_pages_blocks_gallery_type" AS ENUM('dark', 'light', 'auto');
  CREATE TYPE "public"."enum_pages_blocks_gallery_style" AS ENUM('grid', 'carousel', 'masonry');
  CREATE TYPE "public"."enum_pages_blocks_carousel_collection" AS ENUM('pages', 'careers', 'news', 'events', 'brands');
  CREATE TYPE "public"."enum_pages_blocks_slider_collection" AS ENUM('pages', 'careers', 'news', 'events', 'brands');
  CREATE TYPE "public"."enum_pages_blocks_slider_item_type" AS ENUM('one', 'two', 'three', 'four', 'five', 'six', 'seven');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'request-review', 'on-review', 'publish', 'unpublish', 'schedule');
  CREATE TYPE "public"."enum__pages_v_blocks_two_columns_asset_type" AS ENUM('image', 'video', 'color');
  CREATE TYPE "public"."enum__pages_v_blocks_two_columns_asset_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_background_position" AS ENUM('top-left', 'top-right', 'down-left', 'down-right');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_our_locations_type" AS ENUM('none', 'single', 'multiple');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_fullscreen_background_type" AS ENUM('image', 'video', 'color');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_type" AS ENUM('dark', 'light', 'auto');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_style" AS ENUM('grid', 'carousel', 'masonry');
  CREATE TYPE "public"."enum__pages_v_blocks_carousel_collection" AS ENUM('pages', 'careers', 'news', 'events', 'brands');
  CREATE TYPE "public"."enum__pages_v_blocks_slider_collection" AS ENUM('pages', 'careers', 'news', 'events', 'brands');
  CREATE TYPE "public"."enum__pages_v_blocks_slider_item_type" AS ENUM('one', 'two', 'three', 'four', 'five', 'six', 'seven');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'request-review', 'on-review', 'publish', 'unpublish', 'schedule');
  CREATE TYPE "public"."enum_news_blocks_hero_background_position" AS ENUM('top-left', 'top-right', 'down-left', 'down-right');
  CREATE TYPE "public"."enum_news_blocks_hero_our_locations_type" AS ENUM('none', 'single', 'multiple');
  CREATE TYPE "public"."enum_news_blocks_gallery_type" AS ENUM('dark', 'light', 'auto');
  CREATE TYPE "public"."enum_news_blocks_gallery_style" AS ENUM('grid', 'carousel', 'masonry');
  CREATE TYPE "public"."enum_news_blocks_slider_collection" AS ENUM('pages', 'careers', 'news', 'events', 'brands');
  CREATE TYPE "public"."enum_news_blocks_slider_item_type" AS ENUM('one', 'two', 'three', 'four', 'five', 'six', 'seven');
  CREATE TYPE "public"."enum_events_blocks_hero_background_position" AS ENUM('top-left', 'top-right', 'down-left', 'down-right');
  CREATE TYPE "public"."enum_events_blocks_hero_our_locations_type" AS ENUM('none', 'single', 'multiple');
  CREATE TYPE "public"."enum_events_blocks_gallery_type" AS ENUM('dark', 'light', 'auto');
  CREATE TYPE "public"."enum_events_blocks_gallery_style" AS ENUM('grid', 'carousel', 'masonry');
  CREATE TYPE "public"."enum_events_blocks_slider_collection" AS ENUM('pages', 'careers', 'news', 'events', 'brands');
  CREATE TYPE "public"."enum_events_blocks_slider_item_type" AS ENUM('one', 'two', 'three', 'four', 'five', 'six', 'seven');
  CREATE TYPE "public"."enum_brands_blocks_hero_background_position" AS ENUM('top-left', 'top-right', 'down-left', 'down-right');
  CREATE TYPE "public"."enum_brands_blocks_hero_our_locations_type" AS ENUM('none', 'single', 'multiple');
  CREATE TYPE "public"."enum_brands_blocks_gallery_type" AS ENUM('dark', 'light', 'auto');
  CREATE TYPE "public"."enum_brands_blocks_gallery_style" AS ENUM('grid', 'carousel', 'masonry');
  CREATE TYPE "public"."enum_brands_blocks_slider_collection" AS ENUM('pages', 'careers', 'news', 'events', 'brands');
  CREATE TYPE "public"."enum_brands_blocks_slider_item_type" AS ENUM('one', 'two', 'three', 'four', 'five', 'six', 'seven');
  CREATE TABLE "users_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_users_roles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"avatar_id" integer,
  	"active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "pages_blocks_two_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar NOT NULL,
  	"tagline" varchar NOT NULL,
  	"asset_type" "enum_pages_blocks_two_columns_asset_type" NOT NULL,
  	"asset_media_id" integer,
  	"asset_color" varchar,
  	"asset_position" "enum_pages_blocks_two_columns_asset_position" NOT NULL,
  	"description" jsonb NOT NULL,
  	"description_short" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_single_location_open_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"days" varchar,
  	"hours" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_multiple_location" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar,
  	"maps_url" varchar,
  	"open_hours" varchar,
  	"contact" varchar
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"background_position" "enum_pages_blocks_hero_background_position" NOT NULL,
  	"background_image_id" integer NOT NULL,
  	"our_locations_type" "enum_pages_blocks_hero_our_locations_type",
  	"single_location_location_address" varchar,
  	"single_location_location_maps_url" varchar,
  	"single_location_contact_name" varchar,
  	"single_location_contact_phone_number" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_fullscreen" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer NOT NULL,
  	"small_title" varchar NOT NULL,
  	"big_title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"background_type" "enum_pages_blocks_hero_fullscreen_background_type" NOT NULL,
  	"background_media_id" integer,
  	"background_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_milestone_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"append_title" varchar,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_milestone" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"background_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_gallery_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_gallery_type" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"style" "enum_pages_blocks_gallery_style",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar NOT NULL,
  	"tagline" varchar NOT NULL,
  	"collection" "enum_pages_blocks_carousel_collection" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"collection" "enum_pages_blocks_slider_collection" NOT NULL,
  	"item_type" "enum_pages_blocks_slider_item_type" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"description" varchar NOT NULL,
  	"start_date_time" timestamp(3) with time zone,
  	"end_date_time" timestamp(3) with time zone,
  	"menu_id" integer,
  	"status" "enum_pages_status" NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_canonical_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"brands_id" integer,
  	"pages_id" integer,
  	"careers_id" integer,
  	"news_id" integer,
  	"events_id" integer
  );
  
  CREATE TABLE "_pages_v_blocks_two_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"headline" varchar NOT NULL,
  	"tagline" varchar NOT NULL,
  	"asset_type" "enum__pages_v_blocks_two_columns_asset_type" NOT NULL,
  	"asset_media_id" integer,
  	"asset_color" varchar,
  	"asset_position" "enum__pages_v_blocks_two_columns_asset_position" NOT NULL,
  	"description" jsonb NOT NULL,
  	"description_short" varchar NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_single_location_open_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"days" varchar,
  	"hours" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_multiple_location" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"address" varchar,
  	"maps_url" varchar,
  	"open_hours" varchar,
  	"contact" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"background_position" "enum__pages_v_blocks_hero_background_position" NOT NULL,
  	"background_image_id" integer NOT NULL,
  	"our_locations_type" "enum__pages_v_blocks_hero_our_locations_type",
  	"single_location_location_address" varchar,
  	"single_location_location_maps_url" varchar,
  	"single_location_contact_name" varchar,
  	"single_location_contact_phone_number" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_fullscreen" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer NOT NULL,
  	"small_title" varchar NOT NULL,
  	"big_title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"background_type" "enum__pages_v_blocks_hero_fullscreen_background_type" NOT NULL,
  	"background_media_id" integer,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_milestone_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"append_title" varchar,
  	"description" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_milestone" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"background_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_gallery_type" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"style" "enum__pages_v_blocks_gallery_style",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"headline" varchar NOT NULL,
  	"tagline" varchar NOT NULL,
  	"collection" "enum__pages_v_blocks_carousel_collection" NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"collection" "enum__pages_v_blocks_slider_collection" NOT NULL,
  	"item_type" "enum__pages_v_blocks_slider_item_type" NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar NOT NULL,
  	"version_slug" varchar,
  	"version_description" varchar NOT NULL,
  	"version_start_date_time" timestamp(3) with time zone,
  	"version_end_date_time" timestamp(3) with time zone,
  	"version_menu_id" integer,
  	"version_status" "enum__pages_v_version_status" NOT NULL,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_canonical_url" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"brands_id" integer,
  	"pages_id" integer,
  	"careers_id" integer,
  	"news_id" integer,
  	"events_id" integer
  );
  
  CREATE TABLE "positions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "locations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "careers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"qualification" varchar NOT NULL,
  	"position_id" integer NOT NULL,
  	"active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "careers_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locations_id" integer
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "news_blocks_hero_single_location_open_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"days" varchar,
  	"hours" varchar
  );
  
  CREATE TABLE "news_blocks_hero_multiple_location" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar,
  	"maps_url" varchar,
  	"open_hours" varchar,
  	"contact" varchar
  );
  
  CREATE TABLE "news_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"background_position" "enum_news_blocks_hero_background_position" NOT NULL,
  	"background_image_id" integer NOT NULL,
  	"our_locations_type" "enum_news_blocks_hero_our_locations_type",
  	"single_location_location_address" varchar,
  	"single_location_location_maps_url" varchar,
  	"single_location_contact_name" varchar,
  	"single_location_contact_phone_number" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "news_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "news_blocks_gallery_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "news_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_news_blocks_gallery_type" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"style" "enum_news_blocks_gallery_style",
  	"block_name" varchar
  );
  
  CREATE TABLE "news_blocks_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"collection" "enum_news_blocks_slider_collection" NOT NULL,
  	"item_type" "enum_news_blocks_slider_item_type" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "news_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "news" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"headline" varchar NOT NULL,
  	"tagline" varchar,
  	"image_id" integer,
  	"content" jsonb NOT NULL,
  	"active" boolean DEFAULT false NOT NULL,
  	"menu_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "news_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"categories_id" integer,
  	"pages_id" integer,
  	"careers_id" integer,
  	"news_id" integer,
  	"events_id" integer,
  	"brands_id" integer
  );
  
  CREATE TABLE "events_blocks_hero_single_location_open_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"days" varchar,
  	"hours" varchar
  );
  
  CREATE TABLE "events_blocks_hero_multiple_location" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar,
  	"maps_url" varchar,
  	"open_hours" varchar,
  	"contact" varchar
  );
  
  CREATE TABLE "events_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"background_position" "enum_events_blocks_hero_background_position" NOT NULL,
  	"background_image_id" integer NOT NULL,
  	"our_locations_type" "enum_events_blocks_hero_our_locations_type",
  	"single_location_location_address" varchar,
  	"single_location_location_maps_url" varchar,
  	"single_location_contact_name" varchar,
  	"single_location_contact_phone_number" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "events_blocks_gallery_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "events_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_gallery_type" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"style" "enum_events_blocks_gallery_style",
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"collection" "enum_events_blocks_slider_collection" NOT NULL,
  	"item_type" "enum_events_blocks_slider_item_type" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"headline" varchar NOT NULL,
  	"tagline" varchar,
  	"image_id" integer,
  	"content" jsonb NOT NULL,
  	"start_date" timestamp(3) with time zone NOT NULL,
  	"end_date" timestamp(3) with time zone NOT NULL,
  	"active" boolean DEFAULT false NOT NULL,
  	"menu_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "events_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"careers_id" integer,
  	"news_id" integer,
  	"events_id" integer,
  	"brands_id" integer
  );
  
  CREATE TABLE "brands_blocks_hero_single_location_open_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"days" varchar,
  	"hours" varchar
  );
  
  CREATE TABLE "brands_blocks_hero_multiple_location" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar,
  	"maps_url" varchar,
  	"open_hours" varchar,
  	"contact" varchar
  );
  
  CREATE TABLE "brands_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"background_position" "enum_brands_blocks_hero_background_position" NOT NULL,
  	"background_image_id" integer NOT NULL,
  	"our_locations_type" "enum_brands_blocks_hero_our_locations_type",
  	"single_location_location_address" varchar,
  	"single_location_location_maps_url" varchar,
  	"single_location_contact_name" varchar,
  	"single_location_contact_phone_number" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "brands_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "brands_blocks_gallery_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "brands_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_brands_blocks_gallery_type" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"style" "enum_brands_blocks_gallery_style",
  	"block_name" varchar
  );
  
  CREATE TABLE "brands_blocks_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"collection" "enum_brands_blocks_slider_collection" NOT NULL,
  	"item_type" "enum_brands_blocks_slider_item_type" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "brands_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "brands" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"headline" varchar NOT NULL,
  	"tagline" varchar NOT NULL,
  	"status" boolean DEFAULT false NOT NULL,
  	"menu_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "brands_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"careers_id" integer,
  	"news_id" integer,
  	"events_id" integer,
  	"brands_id" integer
  );
  
  CREATE TABLE "menus" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"parent_id" integer,
  	"path" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"positions_id" integer,
  	"locations_id" integer,
  	"careers_id" integer,
  	"categories_id" integer,
  	"news_id" integer,
  	"events_id" integer,
  	"brands_id" integer,
  	"menus_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_configuration_footer_left_social_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "site_configuration" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer NOT NULL,
  	"favicon_id" integer NOT NULL,
  	"site_name" varchar NOT NULL,
  	"base_url" varchar NOT NULL,
  	"headline" varchar NOT NULL,
  	"tagline" varchar NOT NULL,
  	"primary_color" varchar,
  	"secondary_color" varchar,
  	"success_color" varchar,
  	"warning_color" varchar,
  	"danger_color" varchar,
  	"info_color" varchar,
  	"header_logo_id" integer NOT NULL,
  	"header_button_text" varchar NOT NULL,
  	"header_button_link" varchar NOT NULL,
  	"footer_left_logo_id" integer NOT NULL,
  	"footer_left_text" varchar NOT NULL,
  	"footer_right_title" varchar NOT NULL,
  	"footer_right_subtitle" varchar NOT NULL,
  	"footer_right_map_url" varchar NOT NULL,
  	"footer_bottom_copyright" varchar NOT NULL,
  	"footer_bottom_reserve" varchar NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_configuration_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"menus_id" integer
  );
  
  ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_two_columns" ADD CONSTRAINT "pages_blocks_two_columns_asset_media_id_media_id_fk" FOREIGN KEY ("asset_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_two_columns" ADD CONSTRAINT "pages_blocks_two_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_single_location_open_hours" ADD CONSTRAINT "pages_blocks_hero_single_location_open_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_multiple_location" ADD CONSTRAINT "pages_blocks_hero_multiple_location_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_fullscreen" ADD CONSTRAINT "pages_blocks_hero_fullscreen_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_fullscreen" ADD CONSTRAINT "pages_blocks_hero_fullscreen_background_media_id_media_id_fk" FOREIGN KEY ("background_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_fullscreen" ADD CONSTRAINT "pages_blocks_hero_fullscreen_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_milestone_items" ADD CONSTRAINT "pages_blocks_milestone_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_milestone"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_milestone" ADD CONSTRAINT "pages_blocks_milestone_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_milestone" ADD CONSTRAINT "pages_blocks_milestone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_actions" ADD CONSTRAINT "pages_blocks_gallery_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel" ADD CONSTRAINT "pages_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_slider" ADD CONSTRAINT "pages_blocks_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_brands_fk" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_careers_fk" FOREIGN KEY ("careers_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_two_columns" ADD CONSTRAINT "_pages_v_blocks_two_columns_asset_media_id_media_id_fk" FOREIGN KEY ("asset_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_two_columns" ADD CONSTRAINT "_pages_v_blocks_two_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_single_location_open_hours" ADD CONSTRAINT "_pages_v_blocks_hero_single_location_open_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_multiple_location" ADD CONSTRAINT "_pages_v_blocks_hero_multiple_location_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_fullscreen" ADD CONSTRAINT "_pages_v_blocks_hero_fullscreen_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_fullscreen" ADD CONSTRAINT "_pages_v_blocks_hero_fullscreen_background_media_id_media_id_fk" FOREIGN KEY ("background_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_fullscreen" ADD CONSTRAINT "_pages_v_blocks_hero_fullscreen_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_milestone_items" ADD CONSTRAINT "_pages_v_blocks_milestone_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_milestone"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_milestone" ADD CONSTRAINT "_pages_v_blocks_milestone_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_milestone" ADD CONSTRAINT "_pages_v_blocks_milestone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_actions" ADD CONSTRAINT "_pages_v_blocks_gallery_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text" ADD CONSTRAINT "_pages_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel" ADD CONSTRAINT "_pages_v_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_slider" ADD CONSTRAINT "_pages_v_blocks_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_menu_id_menus_id_fk" FOREIGN KEY ("version_menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_brands_fk" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_careers_fk" FOREIGN KEY ("careers_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "careers" ADD CONSTRAINT "careers_position_id_positions_id_fk" FOREIGN KEY ("position_id") REFERENCES "public"."positions"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "careers_rels" ADD CONSTRAINT "careers_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "careers_rels" ADD CONSTRAINT "careers_rels_locations_fk" FOREIGN KEY ("locations_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_blocks_hero_single_location_open_hours" ADD CONSTRAINT "news_blocks_hero_single_location_open_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_blocks_hero_multiple_location" ADD CONSTRAINT "news_blocks_hero_multiple_location_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_blocks_hero" ADD CONSTRAINT "news_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "news_blocks_hero" ADD CONSTRAINT "news_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_blocks_gallery_images" ADD CONSTRAINT "news_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "news_blocks_gallery_images" ADD CONSTRAINT "news_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_blocks_gallery_actions" ADD CONSTRAINT "news_blocks_gallery_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_blocks_gallery" ADD CONSTRAINT "news_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_blocks_slider" ADD CONSTRAINT "news_blocks_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_blocks_rich_text" ADD CONSTRAINT "news_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news" ADD CONSTRAINT "news_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "news" ADD CONSTRAINT "news_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "news_rels" ADD CONSTRAINT "news_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_rels" ADD CONSTRAINT "news_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_rels" ADD CONSTRAINT "news_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_rels" ADD CONSTRAINT "news_rels_careers_fk" FOREIGN KEY ("careers_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_rels" ADD CONSTRAINT "news_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_rels" ADD CONSTRAINT "news_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_rels" ADD CONSTRAINT "news_rels_brands_fk" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_hero_single_location_open_hours" ADD CONSTRAINT "events_blocks_hero_single_location_open_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_hero_multiple_location" ADD CONSTRAINT "events_blocks_hero_multiple_location_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_hero" ADD CONSTRAINT "events_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_blocks_hero" ADD CONSTRAINT "events_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_gallery_images" ADD CONSTRAINT "events_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_blocks_gallery_images" ADD CONSTRAINT "events_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_gallery_actions" ADD CONSTRAINT "events_blocks_gallery_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_gallery" ADD CONSTRAINT "events_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_slider" ADD CONSTRAINT "events_blocks_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_rich_text" ADD CONSTRAINT "events_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_careers_fk" FOREIGN KEY ("careers_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_brands_fk" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_blocks_hero_single_location_open_hours" ADD CONSTRAINT "brands_blocks_hero_single_location_open_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."brands_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_blocks_hero_multiple_location" ADD CONSTRAINT "brands_blocks_hero_multiple_location_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."brands_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_blocks_hero" ADD CONSTRAINT "brands_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "brands_blocks_hero" ADD CONSTRAINT "brands_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_blocks_gallery_images" ADD CONSTRAINT "brands_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "brands_blocks_gallery_images" ADD CONSTRAINT "brands_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."brands_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_blocks_gallery_actions" ADD CONSTRAINT "brands_blocks_gallery_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."brands_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_blocks_gallery" ADD CONSTRAINT "brands_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_blocks_slider" ADD CONSTRAINT "brands_blocks_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_blocks_rich_text" ADD CONSTRAINT "brands_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands" ADD CONSTRAINT "brands_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "brands_rels" ADD CONSTRAINT "brands_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_rels" ADD CONSTRAINT "brands_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_rels" ADD CONSTRAINT "brands_rels_careers_fk" FOREIGN KEY ("careers_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_rels" ADD CONSTRAINT "brands_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_rels" ADD CONSTRAINT "brands_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_rels" ADD CONSTRAINT "brands_rels_brands_fk" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menus" ADD CONSTRAINT "menus_parent_id_menus_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_positions_fk" FOREIGN KEY ("positions_id") REFERENCES "public"."positions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_locations_fk" FOREIGN KEY ("locations_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_careers_fk" FOREIGN KEY ("careers_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_brands_fk" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_menus_fk" FOREIGN KEY ("menus_id") REFERENCES "public"."menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_configuration_footer_left_social_media" ADD CONSTRAINT "site_configuration_footer_left_social_media_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_configuration_footer_left_social_media" ADD CONSTRAINT "site_configuration_footer_left_social_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_configuration"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_configuration" ADD CONSTRAINT "site_configuration_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_configuration" ADD CONSTRAINT "site_configuration_favicon_id_media_id_fk" FOREIGN KEY ("favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_configuration" ADD CONSTRAINT "site_configuration_header_logo_id_media_id_fk" FOREIGN KEY ("header_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_configuration" ADD CONSTRAINT "site_configuration_footer_left_logo_id_media_id_fk" FOREIGN KEY ("footer_left_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_configuration" ADD CONSTRAINT "site_configuration_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_configuration_rels" ADD CONSTRAINT "site_configuration_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."site_configuration"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_configuration_rels" ADD CONSTRAINT "site_configuration_rels_menus_fk" FOREIGN KEY ("menus_id") REFERENCES "public"."menus"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_roles_order_idx" ON "users_roles" USING btree ("order");
  CREATE INDEX "users_roles_parent_idx" ON "users_roles" USING btree ("parent_id");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_avatar_idx" ON "users" USING btree ("avatar_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "pages_blocks_two_columns_order_idx" ON "pages_blocks_two_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_two_columns_parent_id_idx" ON "pages_blocks_two_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_two_columns_path_idx" ON "pages_blocks_two_columns" USING btree ("_path");
  CREATE INDEX "pages_blocks_two_columns_asset_asset_media_idx" ON "pages_blocks_two_columns" USING btree ("asset_media_id");
  CREATE INDEX "pages_blocks_hero_single_location_open_hours_order_idx" ON "pages_blocks_hero_single_location_open_hours" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_single_location_open_hours_parent_id_idx" ON "pages_blocks_hero_single_location_open_hours" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_multiple_location_order_idx" ON "pages_blocks_hero_multiple_location" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_multiple_location_parent_id_idx" ON "pages_blocks_hero_multiple_location" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_background_background_image_idx" ON "pages_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_hero_fullscreen_order_idx" ON "pages_blocks_hero_fullscreen" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_fullscreen_parent_id_idx" ON "pages_blocks_hero_fullscreen" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_fullscreen_path_idx" ON "pages_blocks_hero_fullscreen" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_fullscreen_logo_idx" ON "pages_blocks_hero_fullscreen" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_hero_fullscreen_background_background_media_idx" ON "pages_blocks_hero_fullscreen" USING btree ("background_media_id");
  CREATE INDEX "pages_blocks_milestone_items_order_idx" ON "pages_blocks_milestone_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_milestone_items_parent_id_idx" ON "pages_blocks_milestone_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_milestone_order_idx" ON "pages_blocks_milestone" USING btree ("_order");
  CREATE INDEX "pages_blocks_milestone_parent_id_idx" ON "pages_blocks_milestone" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_milestone_path_idx" ON "pages_blocks_milestone" USING btree ("_path");
  CREATE INDEX "pages_blocks_milestone_background_idx" ON "pages_blocks_milestone" USING btree ("background_id");
  CREATE INDEX "pages_blocks_gallery_images_order_idx" ON "pages_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_images_parent_id_idx" ON "pages_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_images_image_idx" ON "pages_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery_actions_order_idx" ON "pages_blocks_gallery_actions" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_actions_parent_id_idx" ON "pages_blocks_gallery_actions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_carousel_order_idx" ON "pages_blocks_carousel" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_parent_id_idx" ON "pages_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_path_idx" ON "pages_blocks_carousel" USING btree ("_path");
  CREATE INDEX "pages_blocks_slider_order_idx" ON "pages_blocks_slider" USING btree ("_order");
  CREATE INDEX "pages_blocks_slider_parent_id_idx" ON "pages_blocks_slider" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_slider_path_idx" ON "pages_blocks_slider" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_menu_idx" ON "pages" USING btree ("menu_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_brands_id_idx" ON "pages_rels" USING btree ("brands_id");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_careers_id_idx" ON "pages_rels" USING btree ("careers_id");
  CREATE INDEX "pages_rels_news_id_idx" ON "pages_rels" USING btree ("news_id");
  CREATE INDEX "pages_rels_events_id_idx" ON "pages_rels" USING btree ("events_id");
  CREATE INDEX "_pages_v_blocks_two_columns_order_idx" ON "_pages_v_blocks_two_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_two_columns_parent_id_idx" ON "_pages_v_blocks_two_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_two_columns_path_idx" ON "_pages_v_blocks_two_columns" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_two_columns_asset_asset_media_idx" ON "_pages_v_blocks_two_columns" USING btree ("asset_media_id");
  CREATE INDEX "_pages_v_blocks_hero_single_location_open_hours_order_idx" ON "_pages_v_blocks_hero_single_location_open_hours" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_single_location_open_hours_parent_id_idx" ON "_pages_v_blocks_hero_single_location_open_hours" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_multiple_location_order_idx" ON "_pages_v_blocks_hero_multiple_location" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_multiple_location_parent_id_idx" ON "_pages_v_blocks_hero_multiple_location" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_background_background_image_idx" ON "_pages_v_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "_pages_v_blocks_hero_fullscreen_order_idx" ON "_pages_v_blocks_hero_fullscreen" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_fullscreen_parent_id_idx" ON "_pages_v_blocks_hero_fullscreen" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_fullscreen_path_idx" ON "_pages_v_blocks_hero_fullscreen" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_fullscreen_logo_idx" ON "_pages_v_blocks_hero_fullscreen" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_hero_fullscreen_background_background_me_idx" ON "_pages_v_blocks_hero_fullscreen" USING btree ("background_media_id");
  CREATE INDEX "_pages_v_blocks_milestone_items_order_idx" ON "_pages_v_blocks_milestone_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_milestone_items_parent_id_idx" ON "_pages_v_blocks_milestone_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_milestone_order_idx" ON "_pages_v_blocks_milestone" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_milestone_parent_id_idx" ON "_pages_v_blocks_milestone" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_milestone_path_idx" ON "_pages_v_blocks_milestone" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_milestone_background_idx" ON "_pages_v_blocks_milestone" USING btree ("background_id");
  CREATE INDEX "_pages_v_blocks_gallery_images_order_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_images_parent_id_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_images_image_idx" ON "_pages_v_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery_actions_order_idx" ON "_pages_v_blocks_gallery_actions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_actions_parent_id_idx" ON "_pages_v_blocks_gallery_actions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_order_idx" ON "_pages_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_parent_id_idx" ON "_pages_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_path_idx" ON "_pages_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_rich_text_order_idx" ON "_pages_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rich_text_parent_id_idx" ON "_pages_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_path_idx" ON "_pages_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_carousel_order_idx" ON "_pages_v_blocks_carousel" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_parent_id_idx" ON "_pages_v_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_path_idx" ON "_pages_v_blocks_carousel" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_slider_order_idx" ON "_pages_v_blocks_slider" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_slider_parent_id_idx" ON "_pages_v_blocks_slider" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_slider_path_idx" ON "_pages_v_blocks_slider" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_menu_idx" ON "_pages_v" USING btree ("version_menu_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_brands_id_idx" ON "_pages_v_rels" USING btree ("brands_id");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_careers_id_idx" ON "_pages_v_rels" USING btree ("careers_id");
  CREATE INDEX "_pages_v_rels_news_id_idx" ON "_pages_v_rels" USING btree ("news_id");
  CREATE INDEX "_pages_v_rels_events_id_idx" ON "_pages_v_rels" USING btree ("events_id");
  CREATE UNIQUE INDEX "positions_name_idx" ON "positions" USING btree ("name");
  CREATE INDEX "positions_updated_at_idx" ON "positions" USING btree ("updated_at");
  CREATE INDEX "positions_created_at_idx" ON "positions" USING btree ("created_at");
  CREATE UNIQUE INDEX "locations_name_idx" ON "locations" USING btree ("name");
  CREATE INDEX "locations_updated_at_idx" ON "locations" USING btree ("updated_at");
  CREATE INDEX "locations_created_at_idx" ON "locations" USING btree ("created_at");
  CREATE INDEX "careers_position_idx" ON "careers" USING btree ("position_id");
  CREATE INDEX "careers_updated_at_idx" ON "careers" USING btree ("updated_at");
  CREATE INDEX "careers_created_at_idx" ON "careers" USING btree ("created_at");
  CREATE INDEX "careers_rels_order_idx" ON "careers_rels" USING btree ("order");
  CREATE INDEX "careers_rels_parent_idx" ON "careers_rels" USING btree ("parent_id");
  CREATE INDEX "careers_rels_path_idx" ON "careers_rels" USING btree ("path");
  CREATE INDEX "careers_rels_locations_id_idx" ON "careers_rels" USING btree ("locations_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "news_blocks_hero_single_location_open_hours_order_idx" ON "news_blocks_hero_single_location_open_hours" USING btree ("_order");
  CREATE INDEX "news_blocks_hero_single_location_open_hours_parent_id_idx" ON "news_blocks_hero_single_location_open_hours" USING btree ("_parent_id");
  CREATE INDEX "news_blocks_hero_multiple_location_order_idx" ON "news_blocks_hero_multiple_location" USING btree ("_order");
  CREATE INDEX "news_blocks_hero_multiple_location_parent_id_idx" ON "news_blocks_hero_multiple_location" USING btree ("_parent_id");
  CREATE INDEX "news_blocks_hero_order_idx" ON "news_blocks_hero" USING btree ("_order");
  CREATE INDEX "news_blocks_hero_parent_id_idx" ON "news_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "news_blocks_hero_path_idx" ON "news_blocks_hero" USING btree ("_path");
  CREATE INDEX "news_blocks_hero_background_background_image_idx" ON "news_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "news_blocks_gallery_images_order_idx" ON "news_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "news_blocks_gallery_images_parent_id_idx" ON "news_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "news_blocks_gallery_images_image_idx" ON "news_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "news_blocks_gallery_actions_order_idx" ON "news_blocks_gallery_actions" USING btree ("_order");
  CREATE INDEX "news_blocks_gallery_actions_parent_id_idx" ON "news_blocks_gallery_actions" USING btree ("_parent_id");
  CREATE INDEX "news_blocks_gallery_order_idx" ON "news_blocks_gallery" USING btree ("_order");
  CREATE INDEX "news_blocks_gallery_parent_id_idx" ON "news_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "news_blocks_gallery_path_idx" ON "news_blocks_gallery" USING btree ("_path");
  CREATE INDEX "news_blocks_slider_order_idx" ON "news_blocks_slider" USING btree ("_order");
  CREATE INDEX "news_blocks_slider_parent_id_idx" ON "news_blocks_slider" USING btree ("_parent_id");
  CREATE INDEX "news_blocks_slider_path_idx" ON "news_blocks_slider" USING btree ("_path");
  CREATE INDEX "news_blocks_rich_text_order_idx" ON "news_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "news_blocks_rich_text_parent_id_idx" ON "news_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "news_blocks_rich_text_path_idx" ON "news_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "news_image_idx" ON "news" USING btree ("image_id");
  CREATE INDEX "news_menu_idx" ON "news" USING btree ("menu_id");
  CREATE INDEX "news_updated_at_idx" ON "news" USING btree ("updated_at");
  CREATE INDEX "news_created_at_idx" ON "news" USING btree ("created_at");
  CREATE INDEX "news_rels_order_idx" ON "news_rels" USING btree ("order");
  CREATE INDEX "news_rels_parent_idx" ON "news_rels" USING btree ("parent_id");
  CREATE INDEX "news_rels_path_idx" ON "news_rels" USING btree ("path");
  CREATE INDEX "news_rels_categories_id_idx" ON "news_rels" USING btree ("categories_id");
  CREATE INDEX "news_rels_pages_id_idx" ON "news_rels" USING btree ("pages_id");
  CREATE INDEX "news_rels_careers_id_idx" ON "news_rels" USING btree ("careers_id");
  CREATE INDEX "news_rels_news_id_idx" ON "news_rels" USING btree ("news_id");
  CREATE INDEX "news_rels_events_id_idx" ON "news_rels" USING btree ("events_id");
  CREATE INDEX "news_rels_brands_id_idx" ON "news_rels" USING btree ("brands_id");
  CREATE INDEX "events_blocks_hero_single_location_open_hours_order_idx" ON "events_blocks_hero_single_location_open_hours" USING btree ("_order");
  CREATE INDEX "events_blocks_hero_single_location_open_hours_parent_id_idx" ON "events_blocks_hero_single_location_open_hours" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_hero_multiple_location_order_idx" ON "events_blocks_hero_multiple_location" USING btree ("_order");
  CREATE INDEX "events_blocks_hero_multiple_location_parent_id_idx" ON "events_blocks_hero_multiple_location" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_hero_order_idx" ON "events_blocks_hero" USING btree ("_order");
  CREATE INDEX "events_blocks_hero_parent_id_idx" ON "events_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_hero_path_idx" ON "events_blocks_hero" USING btree ("_path");
  CREATE INDEX "events_blocks_hero_background_background_image_idx" ON "events_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "events_blocks_gallery_images_order_idx" ON "events_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "events_blocks_gallery_images_parent_id_idx" ON "events_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_gallery_images_image_idx" ON "events_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "events_blocks_gallery_actions_order_idx" ON "events_blocks_gallery_actions" USING btree ("_order");
  CREATE INDEX "events_blocks_gallery_actions_parent_id_idx" ON "events_blocks_gallery_actions" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_gallery_order_idx" ON "events_blocks_gallery" USING btree ("_order");
  CREATE INDEX "events_blocks_gallery_parent_id_idx" ON "events_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_gallery_path_idx" ON "events_blocks_gallery" USING btree ("_path");
  CREATE INDEX "events_blocks_slider_order_idx" ON "events_blocks_slider" USING btree ("_order");
  CREATE INDEX "events_blocks_slider_parent_id_idx" ON "events_blocks_slider" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_slider_path_idx" ON "events_blocks_slider" USING btree ("_path");
  CREATE INDEX "events_blocks_rich_text_order_idx" ON "events_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "events_blocks_rich_text_parent_id_idx" ON "events_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_rich_text_path_idx" ON "events_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "events_image_idx" ON "events" USING btree ("image_id");
  CREATE INDEX "events_menu_idx" ON "events" USING btree ("menu_id");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX "events_rels_order_idx" ON "events_rels" USING btree ("order");
  CREATE INDEX "events_rels_parent_idx" ON "events_rels" USING btree ("parent_id");
  CREATE INDEX "events_rels_path_idx" ON "events_rels" USING btree ("path");
  CREATE INDEX "events_rels_pages_id_idx" ON "events_rels" USING btree ("pages_id");
  CREATE INDEX "events_rels_careers_id_idx" ON "events_rels" USING btree ("careers_id");
  CREATE INDEX "events_rels_news_id_idx" ON "events_rels" USING btree ("news_id");
  CREATE INDEX "events_rels_events_id_idx" ON "events_rels" USING btree ("events_id");
  CREATE INDEX "events_rels_brands_id_idx" ON "events_rels" USING btree ("brands_id");
  CREATE INDEX "brands_blocks_hero_single_location_open_hours_order_idx" ON "brands_blocks_hero_single_location_open_hours" USING btree ("_order");
  CREATE INDEX "brands_blocks_hero_single_location_open_hours_parent_id_idx" ON "brands_blocks_hero_single_location_open_hours" USING btree ("_parent_id");
  CREATE INDEX "brands_blocks_hero_multiple_location_order_idx" ON "brands_blocks_hero_multiple_location" USING btree ("_order");
  CREATE INDEX "brands_blocks_hero_multiple_location_parent_id_idx" ON "brands_blocks_hero_multiple_location" USING btree ("_parent_id");
  CREATE INDEX "brands_blocks_hero_order_idx" ON "brands_blocks_hero" USING btree ("_order");
  CREATE INDEX "brands_blocks_hero_parent_id_idx" ON "brands_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "brands_blocks_hero_path_idx" ON "brands_blocks_hero" USING btree ("_path");
  CREATE INDEX "brands_blocks_hero_background_background_image_idx" ON "brands_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "brands_blocks_gallery_images_order_idx" ON "brands_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "brands_blocks_gallery_images_parent_id_idx" ON "brands_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "brands_blocks_gallery_images_image_idx" ON "brands_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "brands_blocks_gallery_actions_order_idx" ON "brands_blocks_gallery_actions" USING btree ("_order");
  CREATE INDEX "brands_blocks_gallery_actions_parent_id_idx" ON "brands_blocks_gallery_actions" USING btree ("_parent_id");
  CREATE INDEX "brands_blocks_gallery_order_idx" ON "brands_blocks_gallery" USING btree ("_order");
  CREATE INDEX "brands_blocks_gallery_parent_id_idx" ON "brands_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "brands_blocks_gallery_path_idx" ON "brands_blocks_gallery" USING btree ("_path");
  CREATE INDEX "brands_blocks_slider_order_idx" ON "brands_blocks_slider" USING btree ("_order");
  CREATE INDEX "brands_blocks_slider_parent_id_idx" ON "brands_blocks_slider" USING btree ("_parent_id");
  CREATE INDEX "brands_blocks_slider_path_idx" ON "brands_blocks_slider" USING btree ("_path");
  CREATE INDEX "brands_blocks_rich_text_order_idx" ON "brands_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "brands_blocks_rich_text_parent_id_idx" ON "brands_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "brands_blocks_rich_text_path_idx" ON "brands_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "brands_menu_idx" ON "brands" USING btree ("menu_id");
  CREATE INDEX "brands_updated_at_idx" ON "brands" USING btree ("updated_at");
  CREATE INDEX "brands_created_at_idx" ON "brands" USING btree ("created_at");
  CREATE INDEX "brands_rels_order_idx" ON "brands_rels" USING btree ("order");
  CREATE INDEX "brands_rels_parent_idx" ON "brands_rels" USING btree ("parent_id");
  CREATE INDEX "brands_rels_path_idx" ON "brands_rels" USING btree ("path");
  CREATE INDEX "brands_rels_pages_id_idx" ON "brands_rels" USING btree ("pages_id");
  CREATE INDEX "brands_rels_careers_id_idx" ON "brands_rels" USING btree ("careers_id");
  CREATE INDEX "brands_rels_news_id_idx" ON "brands_rels" USING btree ("news_id");
  CREATE INDEX "brands_rels_events_id_idx" ON "brands_rels" USING btree ("events_id");
  CREATE INDEX "brands_rels_brands_id_idx" ON "brands_rels" USING btree ("brands_id");
  CREATE INDEX "menus_parent_idx" ON "menus" USING btree ("parent_id");
  CREATE UNIQUE INDEX "menus_path_idx" ON "menus" USING btree ("path");
  CREATE INDEX "menus_updated_at_idx" ON "menus" USING btree ("updated_at");
  CREATE INDEX "menus_created_at_idx" ON "menus" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_positions_id_idx" ON "payload_locked_documents_rels" USING btree ("positions_id");
  CREATE INDEX "payload_locked_documents_rels_locations_id_idx" ON "payload_locked_documents_rels" USING btree ("locations_id");
  CREATE INDEX "payload_locked_documents_rels_careers_id_idx" ON "payload_locked_documents_rels" USING btree ("careers_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_news_id_idx" ON "payload_locked_documents_rels" USING btree ("news_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_brands_id_idx" ON "payload_locked_documents_rels" USING btree ("brands_id");
  CREATE INDEX "payload_locked_documents_rels_menus_id_idx" ON "payload_locked_documents_rels" USING btree ("menus_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_configuration_footer_left_social_media_order_idx" ON "site_configuration_footer_left_social_media" USING btree ("_order");
  CREATE INDEX "site_configuration_footer_left_social_media_parent_id_idx" ON "site_configuration_footer_left_social_media" USING btree ("_parent_id");
  CREATE INDEX "site_configuration_footer_left_social_media_icon_idx" ON "site_configuration_footer_left_social_media" USING btree ("icon_id");
  CREATE INDEX "site_configuration_logo_idx" ON "site_configuration" USING btree ("logo_id");
  CREATE INDEX "site_configuration_favicon_idx" ON "site_configuration" USING btree ("favicon_id");
  CREATE INDEX "site_configuration_header_header_logo_idx" ON "site_configuration" USING btree ("header_logo_id");
  CREATE INDEX "site_configuration_footer_left_footer_left_logo_idx" ON "site_configuration" USING btree ("footer_left_logo_id");
  CREATE INDEX "site_configuration_image_idx" ON "site_configuration" USING btree ("image_id");
  CREATE INDEX "site_configuration_rels_order_idx" ON "site_configuration_rels" USING btree ("order");
  CREATE INDEX "site_configuration_rels_parent_idx" ON "site_configuration_rels" USING btree ("parent_id");
  CREATE INDEX "site_configuration_rels_path_idx" ON "site_configuration_rels" USING btree ("path");
  CREATE INDEX "site_configuration_rels_menus_id_idx" ON "site_configuration_rels" USING btree ("menus_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_roles" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "pages_blocks_two_columns" CASCADE;
  DROP TABLE "pages_blocks_hero_single_location_open_hours" CASCADE;
  DROP TABLE "pages_blocks_hero_multiple_location" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_hero_fullscreen" CASCADE;
  DROP TABLE "pages_blocks_milestone_items" CASCADE;
  DROP TABLE "pages_blocks_milestone" CASCADE;
  DROP TABLE "pages_blocks_gallery_images" CASCADE;
  DROP TABLE "pages_blocks_gallery_actions" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_carousel" CASCADE;
  DROP TABLE "pages_blocks_slider" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_two_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_single_location_open_hours" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_multiple_location" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_fullscreen" CASCADE;
  DROP TABLE "_pages_v_blocks_milestone_items" CASCADE;
  DROP TABLE "_pages_v_blocks_milestone" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_actions" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel" CASCADE;
  DROP TABLE "_pages_v_blocks_slider" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "positions" CASCADE;
  DROP TABLE "locations" CASCADE;
  DROP TABLE "careers" CASCADE;
  DROP TABLE "careers_rels" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "news_blocks_hero_single_location_open_hours" CASCADE;
  DROP TABLE "news_blocks_hero_multiple_location" CASCADE;
  DROP TABLE "news_blocks_hero" CASCADE;
  DROP TABLE "news_blocks_gallery_images" CASCADE;
  DROP TABLE "news_blocks_gallery_actions" CASCADE;
  DROP TABLE "news_blocks_gallery" CASCADE;
  DROP TABLE "news_blocks_slider" CASCADE;
  DROP TABLE "news_blocks_rich_text" CASCADE;
  DROP TABLE "news" CASCADE;
  DROP TABLE "news_rels" CASCADE;
  DROP TABLE "events_blocks_hero_single_location_open_hours" CASCADE;
  DROP TABLE "events_blocks_hero_multiple_location" CASCADE;
  DROP TABLE "events_blocks_hero" CASCADE;
  DROP TABLE "events_blocks_gallery_images" CASCADE;
  DROP TABLE "events_blocks_gallery_actions" CASCADE;
  DROP TABLE "events_blocks_gallery" CASCADE;
  DROP TABLE "events_blocks_slider" CASCADE;
  DROP TABLE "events_blocks_rich_text" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "events_rels" CASCADE;
  DROP TABLE "brands_blocks_hero_single_location_open_hours" CASCADE;
  DROP TABLE "brands_blocks_hero_multiple_location" CASCADE;
  DROP TABLE "brands_blocks_hero" CASCADE;
  DROP TABLE "brands_blocks_gallery_images" CASCADE;
  DROP TABLE "brands_blocks_gallery_actions" CASCADE;
  DROP TABLE "brands_blocks_gallery" CASCADE;
  DROP TABLE "brands_blocks_slider" CASCADE;
  DROP TABLE "brands_blocks_rich_text" CASCADE;
  DROP TABLE "brands" CASCADE;
  DROP TABLE "brands_rels" CASCADE;
  DROP TABLE "menus" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_configuration_footer_left_social_media" CASCADE;
  DROP TABLE "site_configuration" CASCADE;
  DROP TABLE "site_configuration_rels" CASCADE;
  DROP TYPE "public"."enum_users_roles";
  DROP TYPE "public"."enum_pages_blocks_two_columns_asset_type";
  DROP TYPE "public"."enum_pages_blocks_two_columns_asset_position";
  DROP TYPE "public"."enum_pages_blocks_hero_background_position";
  DROP TYPE "public"."enum_pages_blocks_hero_our_locations_type";
  DROP TYPE "public"."enum_pages_blocks_hero_fullscreen_background_type";
  DROP TYPE "public"."enum_pages_blocks_gallery_type";
  DROP TYPE "public"."enum_pages_blocks_gallery_style";
  DROP TYPE "public"."enum_pages_blocks_carousel_collection";
  DROP TYPE "public"."enum_pages_blocks_slider_collection";
  DROP TYPE "public"."enum_pages_blocks_slider_item_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_two_columns_asset_type";
  DROP TYPE "public"."enum__pages_v_blocks_two_columns_asset_position";
  DROP TYPE "public"."enum__pages_v_blocks_hero_background_position";
  DROP TYPE "public"."enum__pages_v_blocks_hero_our_locations_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_fullscreen_background_type";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_type";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_style";
  DROP TYPE "public"."enum__pages_v_blocks_carousel_collection";
  DROP TYPE "public"."enum__pages_v_blocks_slider_collection";
  DROP TYPE "public"."enum__pages_v_blocks_slider_item_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_news_blocks_hero_background_position";
  DROP TYPE "public"."enum_news_blocks_hero_our_locations_type";
  DROP TYPE "public"."enum_news_blocks_gallery_type";
  DROP TYPE "public"."enum_news_blocks_gallery_style";
  DROP TYPE "public"."enum_news_blocks_slider_collection";
  DROP TYPE "public"."enum_news_blocks_slider_item_type";
  DROP TYPE "public"."enum_events_blocks_hero_background_position";
  DROP TYPE "public"."enum_events_blocks_hero_our_locations_type";
  DROP TYPE "public"."enum_events_blocks_gallery_type";
  DROP TYPE "public"."enum_events_blocks_gallery_style";
  DROP TYPE "public"."enum_events_blocks_slider_collection";
  DROP TYPE "public"."enum_events_blocks_slider_item_type";
  DROP TYPE "public"."enum_brands_blocks_hero_background_position";
  DROP TYPE "public"."enum_brands_blocks_hero_our_locations_type";
  DROP TYPE "public"."enum_brands_blocks_gallery_type";
  DROP TYPE "public"."enum_brands_blocks_gallery_style";
  DROP TYPE "public"."enum_brands_blocks_slider_collection";
  DROP TYPE "public"."enum_brands_blocks_slider_item_type";`)
}
