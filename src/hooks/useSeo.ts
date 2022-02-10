import { graphql, useStaticQuery } from "gatsby";

export const useSeo = () => {
  const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return site;
};
