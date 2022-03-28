import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Route
 *
 *
 */
export interface Route extends SanityDocument {
  _type: "route";

  /**
   * Rote Title — `string`
   *
   * Internal, human-readable name for this route
   */
  title?: string;

  /**
   * Route — `slug`
   *
   * Hyphenated name of the route.  "root" is a reserved keyword for the root of the domain (eg. https://domain.com)
   */
  route?: { _type: "route"; current: string };
}

/**
 * Landing Page
 *
 *
 */
export interface LandingPage extends SanityDocument {
  _type: "landingPage";

  /**
   * Internal Title — `string`
   *
   * Name the page.  Not visible to the outside world.
   */
  internalTitle?: string;

  /**
   * Internal Description — `string`
   *
   * Describe the purpose of the page.  Not visible to the outside world.
   */
  internalDescription?: string;

  /**
   * Url Slug — `slug`
   *
   * Intended route of the page.  "root" is a reserved keyword for the root of the domain.
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Header — `reference`
   *
   * Select the header to display at the top of this page
   */
  header?: SanityReference<Hero | CtaSection>;

  /**
   * Sections — `array`
   *
   * Select and arrange sections in the order they should appear
   */
  sections?: Array<
    SanityKeyedReference<
      | FeatureList
      | FeatureSummary
      | LogoCloud
      | Team
      | Metrics
      | CtaSection
      | PostList
    >
  >;

  /**
   * Footer — `reference`
   *
   * Select the footer to display at the bottom of the page
   */
  footer?: SanityReference<Footer>;

  /**
   * Navigation Items — `array`
   *
   * Navigation items to display on the site
   */
  navItems?: Array<SanityKeyedReference<NavItem>>;
}

/**
 * Call-to-Action
 *
 *
 */
export interface CallToAction extends SanityDocument {
  _type: "callToAction";

  /**
   * CTA Title — `string`
   *
   * Title this call-to-action
   */
  title?: string;

  /**
   * CTA description — `string`
   *
   * Describe the purpose of this call-to-action
   */
  description?: string;

  /**
   * Button Text — `string`
   *
   * The text that will be displayed in the button
   */
  buttonText?: string;

  /**
   * Style — `string`
   *
   * define the style of the call-to-action
   */
  style?: "primary" | "secondary" | "email";

  /**
   * Link to Page — `pageLink`
   *
   * Create a link to a page
   */
  pageLink?: PageLink;
}

/**
 * Hero
 *
 *
 */
export interface Hero extends SanityDocument {
  _type: "hero";

  /**
   * Internal Title — `string`
   *
   * Internal description for this header
   */
  title?: string;

  /**
   * Marketing Headline — `string`
   *
   * The main text in the hero section
   */
  headline?: string;

  /**
   * Sub Headline — `simplePortableText`
   *
   * A longer description that appears just beneath the main marketing headline.
   */
  subHeadline?: SimplePortableText;

  /**
   * Hero Section Image — `image`
   *
   * The image or logo to be used in the hero section
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Call-to-Action — `array`
   *
   * Create a primary and/or secondary CTA for this section
   */
  callsToAction?: Array<SanityKeyedReference<CallToAction>>;
}

/**
 * Feature Summary
 *
 *
 */
export interface FeatureSummary extends SanityDocument {
  _type: "featureSummary";

  /**
   * Internal Title — `string`
   *
   *
   */
  internalTitle?: string;

  /**
   * Feature Title — `string`
   *
   * Short title of the feature
   */
  title?: string;

  /**
   * Headline — `string`
   *
   *
   */
  headline?: string;

  /**
   * Sub Headline — `string`
   *
   *
   */
  subHeadline?: string;

  /**
   * Description — `blockContent`
   *
   * A short description of the feature
   */
  description?: BlockContent;

  /**
   * Feature Icon — `image`
   *
   * Select an icon to display with the feature
   */
  icon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Call to Action — `reference`
   *
   * Select the call-to-action to associate with this feature.
   */
  callToAction?: SanityReference<CallToAction>;

  /**
   * Image — `image`
   *
   * Visual description of the feature
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Feature List
 *
 *
 */
export interface FeatureList extends SanityDocument {
  _type: "featureList";

  /**
   * Internal Title — `string`
   *
   *
   */
  internalTitle?: string;

  /**
   * Feature Title — `string`
   *
   * Short title of the feature set
   */
  title?: string;

  /**
   * Main Feature Headline — `string`
   *
   * A short headline describing the feature set
   */
  headline?: string;

  /**
   * Sub-Headline — `string`
   *
   * A sub-headline that adds more context to the headline
   */
  subHeadline?: string;

  /**
   * Features — `array`
   *
   * Add features to this description
   */
  features?: Array<
    SanityKeyed<{
      /**
       * Feature Title — `string`
       *
       * Title the feature
       */
      featureTitle?: string;

      /**
       * Feature Description — `string`
       *
       * Describe the feature
       */
      featureDescription?: string;

      /**
       * Feature Icon — `image`
       *
       *
       */
      icon?: {
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      };
    }>
  >;
}

/**
 * Footer
 *
 *
 */
export interface Footer extends SanityDocument {
  _type: "footer";

  /**
   * Footer title — `string`
   *
   * Internal title of the footer
   */
  title?: string;

  /**
   * Description — `string`
   *
   * Describe the purpose of the footer
   */
  description?: string;

  /**
   * Navigation Items — `array`
   *
   * Select the navigation items to display in the footer
   */
  navItems?: Array<SanityKeyedReference<NavItem>>;

  /**
   * Social Connections — `array`
   *
   * Select the social connections to display in the footer
   */
  socials?: Array<SanityKeyedReference<SocialConnection>>;
}

/**
 * Navigation Item
 *
 *
 */
export interface NavItem extends SanityDocument {
  _type: "navItem";

  /**
   * Navigation Title — `string`
   *
   * Ex: Home, About, etc.  The displayed text of the navigation item.
   */
  title?: string;

  /**
   * Icon — `string`
   *
   * Icon selector from google fonts library https://fonts.google.com/icons?selected=Material+Icons
   */
  icon?: string;

  /**
   * Route — `reference`
   *
   * When the nav item is clicked, where should the user be sent?
   */
  route?: SanityReference<LandingPage | Post>;
}

/**
 * Social Connections
 *
 *
 */
export interface SocialConnection extends SanityDocument {
  _type: "socialConnection";

  /**
   * Social Media Type — `string`
   *
   * Select the social media platform to connect
   */
  type?: "facebook" | "instagram" | "twitter" | "linkedin";

  /**
   * URL — `url`
   *
   * Enter the url for the specific page on the platform
   */
  url?: string;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Excerpt — `simplePortableText`
   *
   * The text that will display on google search results or socail share cards
   */
  excerpt?: SimplePortableText;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Featured Post? — `boolean`
   *
   * Check to pin this post to the featured list
   */
  featured?: boolean;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Work Title — `string`
   *
   * Example: CEO
   */
  workTitle?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * settings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";

  /**
   * Brand Name — `string`
   *
   * Branding title that appears next to the brand logo
   */
  name?: string;

  /**
   * Brand Icon — `image`
   *
   * The brand icon for the site
   */
  icon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Call-to-Action Section
 *
 *
 */
export interface CtaSection extends SanityDocument {
  _type: "ctaSection";

  /**
   * Internal Title — `string`
   *
   * Internal description for this header
   */
  internalTitle?: string;

  /**
   * Main Marketing Headline — `string`
   *
   * The main text in the CTA section
   */
  headline?: string;

  /**
   * Sub Headline — `string`
   *
   * A longer description that appears just beneath the main marketing headline.
   */
  subHeadline?: string;

  /**
   * Call-to-Action — `array`
   *
   * Create a primary and/or secondary CTA for this section
   */
  callToAction?: Array<SanityKeyedReference<CallToAction>>;
}

/**
 * Metrics
 *
 *
 */
export interface Metrics extends SanityDocument {
  _type: "metrics";

  /**
   * Internal Title — `string`
   *
   *
   */
  internalTitle?: string;

  /**
   * Feature Title — `string`
   *
   * Short title describing the metrics
   */
  title?: string;

  /**
   * Headline — `string`
   *
   *
   */
  headline?: string;

  /**
   * Sub Headline — `string`
   *
   *
   */
  subHeadline?: string;

  /**
   * Metrics — `array`
   *
   *
   */
  metrics?: Array<
    SanityKeyed<{
      _type: "metric";
      /**
       * Metric Number — `string`
       *
       * ex: 150
       */
      number?: string;

      /**
       * Metric Name — `string`
       *
       * ex: Miles per hour
       */
      name?: string;
    }>
  >;
}

/**
 * Testimonial
 *
 *
 */
export interface Testimonial extends SanityDocument {
  _type: "testimonial";

  /**
   * Attestant Name — `string`
   *
   * Who is giving the tetimonial
   */
  name?: string;

  /**
   * Attestant Title and Company — `string`
   *
   * Ex: Tech Lead at Google
   */
  company?: string;

  /**
   * Attestant Avatar — `image`
   *
   *
   */
  avatar?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Testimonial — `simplePortableText`
   *
   *
   */
  testimonial?: SimplePortableText;
}

/**
 * Logo Cloud
 *
 *
 */
export interface LogoCloud extends SanityDocument {
  _type: "logoCloud";

  /**
   * Headline — `string`
   *
   * Ex: Trusted by these great businesses
   */
  headline?: string;

  /**
   * Companies — `array`
   *
   *
   */
  companies?: Array<
    SanityKeyed<{
      _type: "company";
      /**
       * Company Name — `string`
       *
       *
       */
      name?: string;

      /**
       * Company logo — `image`
       *
       *
       */
      logo?: {
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      };

      /**
       * Icon — `iconPicker`
       *
       *
       */
      icon?: IconPicker;
    }>
  >;
}

/**
 * Team
 *
 *
 */
export interface Team extends SanityDocument {
  _type: "team";

  /**
   * Headline — `string`
   *
   *
   */
  headline?: string;

  /**
   * Sub Headline — `string`
   *
   *
   */
  subHeadline?: string;

  /**
   * Team Members — `array`
   *
   *
   */
  teamMembers?: Array<SanityKeyedReference<Author>>;
}

/**
 * Post List
 *
 *
 */
export interface PostList extends SanityDocument {
  _type: "postList";

  /**
   * Internal Title — `string`
   *
   *
   */
  internalTitle?: string;

  /**
   * Headline — `string`
   *
   *
   */
  headline?: string;

  /**
   * Sub-headline — `string`
   *
   *
   */
  subHeadline?: string;

  /**
   * List Type — `string`
   *
   *
   */
  listType?: "latest" | "featured" | "custom";

  /**
   * Custom Posts — `array`
   *
   *
   */
  posts?: Array<SanityKeyedReference<Post>>;
}

/**
 * Testimonial Section
 *
 *
 */
export interface TestimonialSection extends SanityDocument {
  _type: "testimonialSection";

  /**
   * Internal Title — `string`
   *
   *
   */
  internalTitle?: string;

  /**
   * Format — `string`
   *
   *
   */
  format?: "single" | "twoColumn" | "sideScroll";

  /**
   * Testimonials — `array`
   *
   *
   */
  testimonials?: Array<SanityKeyedReference<Testimonial>>;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type SimplePortableText = Array<SanityKeyed<SanityBlock>>;

export type PageLink = SanityReference<LandingPage | Post>;

export type Documents =
  | Route
  | LandingPage
  | CallToAction
  | Hero
  | FeatureSummary
  | FeatureList
  | Footer
  | NavItem
  | SocialConnection
  | Post
  | Author
  | Category
  | SiteSettings
  | CtaSection
  | Metrics
  | Testimonial
  | LogoCloud
  | Team
  | PostList
  | TestimonialSection;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type IconPicker = any;
