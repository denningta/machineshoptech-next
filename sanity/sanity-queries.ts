import { Author, BlockContent, CallToAction, Category, FeatureList, FeatureSummary, Footer, GenericHeader, LogoCloud, Metrics, NavItem, PostList, SanityImageAsset, SiteSettings, SocialConnection } from "../interfaces/sanity-schema";
import { Hero } from "../interfaces/sanity-schema";
import { CtaSection } from "../interfaces/sanity-schema";

const groq = require("groq");


export const siteSettingsQuery = groq`*[_type == 'siteSettings'][0]`;
export type SiteSettingsGroq = SiteSettings;

export const landingPagesQuery = groq`*[_type == 'landingPage'] { "slug": slug.current }`;
export type LandingPagesQuery = [{ slug: string }];

export const landingPageQuery = groq`
    *[_type == 'landingPage' && slug.current == $slug]{
    ...,
    "footer": footer->{
      "navItems": navItems[]->{
        ...,
        icon,
        title,
        "route": route->slug.current
      },
      socials[]->{
        ...,
        type,
        url
      }
    },
    "header": header->{
      ...,
      title,
      headline,
      subHeadline,
      image,
      "callsToAction": callsToAction[]->{
        ...,
        "route": pageLink->slug.current
      }
    },
    "navItems": navItems[]->{
      ...,
      icon,
      title,
      "route": route->slug.current
    },
    "sections": sections[]->{
      ...,
      callsToAction[]->{
        ...,
        "route": pageLink->slug.current
      }
    }

  }[0]
`;

export type CallToActionGroq = Omit<CallToAction, 'route'> & {
  callToAction: Omit<CallToAction, 'route'> & {
    route: string;
  }
}

export type NavItemGroq = Omit<Pick<NavItem, 'title' | 'icon'>, 'route'> & { route: string };

export type IconPickerGroq = {
  _type?: string;
  name: string;
  provider: string;
} 

// Sections
export type HeroGroq = Omit<Hero, 'callsToAction'> & {
  callsToAction: CallToActionGroq[];
}

export type CtaSectionGroq = Omit<CtaSection, 'callsToAction'> & {
  callsToAction: CallToActionGroq[];
}

export type GenericHeaderGroq = GenericHeader;

export type FeatureListGroq = FeatureList;

export type FeatureSummaryGroq = Omit<FeatureSummary, 'callsToAction'> & {
  callsToAction: CallToActionGroq[];
};

export type LogoCloudGroq = LogoCloud;

export type MetricsGroq = Metrics;

export type PostListSectionGroq = PostList;

export type HeaderGroq = HeroGroq | CtaSectionGroq | GenericHeaderGroq;

export type FooterGroq = Omit<Footer, 'navItems' | 'socials'> & {
  navItems: NavItemGroq[];
  socials: SocialConnection[];
};

export type SectionGroq = 
  HeroGroq | 
  CtaSectionGroq | 
  FeatureListGroq | 
  FeatureSummaryGroq |
  LogoCloudGroq | 
  MetricsGroq |
  PostListSectionGroq;

  export const postListQuery = groq`
    *[_type == 'post'] {
      slug,
      title,
      author->,
      categories[]->,
      mainImage,
      excerpt,
      featured,
      publishedAt,
      "numberOfCharacters": length(pt::text(body)),
      // assumes 5 characters as mean word length
      // https://ux.stackexchange.com/questions/22520/how-long-does-it-take-to-read-x-number-of-characters
      "estimatedWordCount": round(length(pt::text(body)) / 5),
      // Words per minute: 180
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    } | order(publishedAt desc)
  `;

  export type PostCardGroq = {
    slug: { _type: "slug"; current: string };
    title: string;
    author: Author;
    categories: Category[];
    mainImage: SanityImageAsset;
    excerpt: BlockContent;
    featured: boolean;
    publishedAt: string;
    numberOfCharacters: number;
    estimatedWordCount: number;
    estimatedReadingTime: number;
  };

  export type PostListGroq = PostCardGroq[]