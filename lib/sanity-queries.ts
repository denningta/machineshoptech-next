import {
  Author,
  BlockContent,
  CallToAction,
  Category,
  FeatureList,
  FeatureSummary,
  Footer,
  Form,
  GenericHeader,
  LandingPage,
  LogoCloud,
  Metrics,
  NavItem,
  Post,
  PostList,
  SanityImageAsset,
  SiteSettings,
  SocialConnection,
} from '../interfaces/sanity-schema';
import { Hero } from '../interfaces/sanity-schema';
import { CtaSection } from '../interfaces/sanity-schema';

import groq from 'groq';

export interface SanityScheduleMetadata {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  datetime: string;
  documentId: string;
  rev: string;
  scheduledAt: string;
  user: {
    displayName: string;
    id: string;
    imageUrl: string;
  };
}

export const siteSettingsQuery = groq`*[_type == 'siteSettings'][0]`;
export type SiteSettingsGroq = SiteSettings;

export const landingPagesPathsQuery = groq`
  *[_type == 'landingPage'] { "slug": slug.current }
`;
export type LandingPagesPathsGroq = [{ slug: string }];

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
      callsToAction[]->{
        ...,
        "route": {
          "slug": pageLink->slug.current,
          "type": pageLink->_type,
        }
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
        "route": {
          "slug": pageLink->slug.current,
          "type": pageLink->_type,
        }
      }
    }

  }[0]
`;

export type LandingPageGroq = Omit<
  LandingPage,
  'footer' | 'header' | 'navItems' | 'sections'
> & {
  footer: FooterGroq;
  header: HeaderGroq;
  navItems: NavItemGroq[];
  sections: SectionGroq[];
};

export type CallToActionGroq = Omit<CallToAction, 'route'> & {
  route: {
    slug: string;
    type: 'landingPage' | 'post';
  };
};

export const blogNavItems = groq`
  *[_type == 'landingPage' && slug.current == 'blog']{
  navItems[]->{
    ...,
    "route": route->slug.current
  }
}[0].navItems
`;

export type NavItemGroq = Omit<Pick<NavItem, 'title' | 'icon'>, 'route'> & {
  route: string;
};

export type IconPickerGroq = {
  _type?: string;
  name: string;
  provider: string;
};

// Sections
export type HeroGroq = Omit<Hero, 'callsToAction'> & {
  callsToAction: CallToActionGroq[];
};

export type CtaSectionGroq = Omit<CtaSection, 'callsToAction'> & {
  callsToAction: CallToActionGroq[];
};

export type GenericHeaderGroq = GenericHeader;

export type FeatureListGroq = FeatureList;

export type FeatureSummaryGroq = Omit<FeatureSummary, 'callsToAction'> & {
  callsToAction: CallToActionGroq[];
};

export type LogoCloudGroq = LogoCloud;

export type MetricsGroq = Metrics;

export type PostListSectionGroq = PostList;

export type HeaderGroq = HeroGroq | CtaSectionGroq | GenericHeaderGroq;

export const footerQuery = groq`
  *[_type == 'landingPage' && slug.current == $slug]{
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
  }[0].footer
`;

export type FooterGroq = Omit<Footer, 'navItems' | 'socials'> & {
  navItems: NavItemGroq[];
  socials: SocialConnection[];
};

export type FormGroq = Form;

export type SectionGroq =
  | HeroGroq
  | CtaSectionGroq
  | FeatureListGroq
  | FeatureSummaryGroq
  | LogoCloudGroq
  | MetricsGroq
  | PostListSectionGroq
  | FormGroq;

export const postListPathsQuery = groq`
  *[_type == 'postList'] { "slug": slug.current }
`;

export type PostListPathsGroq = [{ slug: string }];

export const postsPathsQuery = groq`
  *[_type == 'post'] { "slug": slug.current }
`;

export type PostsPathsGroq = [{ slug: string }];

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
  slug: { _type: 'slug'; current: string };
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

export type PostListGroq = PostCardGroq[];

export const postQuery = groq`
  *[_type == 'post' && slug.current == $slug]{
    ...,
    author->,
    categories[]->,
    footerSections[]->{
      ...,
      callsToAction[]->{
        ...,
        "route": {
          "slug": pageLink->slug.current,
          "type": pageLink->_type,
        }
      }
    },
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  }[0]
`;

export type PostGroq = Omit<
  Post,
  'author' | 'categories' | 'footerSections'
> & {
  author: Author;
  categories: Category[];
  footerSections: SectionGroq[];
  estimatedReadingTime: number;
};
