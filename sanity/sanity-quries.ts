import { CallToAction, FeatureList, FeatureSummary, LogoCloud, Metrics, NavItem, PostList } from "../interfaces/sanity-schema";
import { Hero } from "../interfaces/sanity-schema";
import { CtaSection } from "../interfaces/sanity-schema";

const groq = require("groq");


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
      callToAction->{
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

export type NavItemGroq = Omit<Pick<NavItem, 'title' | 'icon'>, 'route'> & { route: string }

// Sections
export type HeroGroq = Omit<Hero, 'callsToAction'> & {
  callsToAction: CallToActionGroq[];
}

export type CtaSectionGroq = Omit<CtaSection, 'callToAction'> & {
  callToAction: CallToActionGroq;
}

export type FeatureListGroq = FeatureList;

export type FeatureSummaryGroq = Omit<FeatureSummary, 'callsToAction'> & {
  callsToAction: CallToActionGroq[];
};

export type LogoCloudGroq = LogoCloud;

export type MetricsGroq = Metrics;

export type PostListGroq = PostList;

export type HeaderGroq = HeroGroq | CtaSectionGroq;

export type SectionGroq = 
  HeroGroq | 
  CtaSectionGroq | 
  FeatureListGroq | 
  FeatureSummaryGroq |
  LogoCloudGroq | 
  MetricsGroq;

