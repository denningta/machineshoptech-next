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

