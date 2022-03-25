const groq = require("groq");


export const landingPagesResult = groq`*[_type == 'landingPage'] { "slug": slug.current }`;
export type LandingPagesResult = [{ slug: string }];

export const landingPageQuery = groq`
  *[_type == 'landingPage' && slug.current == $slug]{
    ...,
    "navItems": navItems[]->{
      icon,
      title,
      "route": route->slug.current
    }
  }[0]
`;

