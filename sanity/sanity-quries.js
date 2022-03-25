const groq = require("groq");


export default function generateQuery() {
  
}

const navItem = groq`
    "navItems": navItems[]->{
      icon,
      title,
      "route": route->slug.current
`;

export const landingPage = groq`
  *[_type == 'landingPage' && slug.current == $slug]{
    ...,
    }
  }[0]
`;

