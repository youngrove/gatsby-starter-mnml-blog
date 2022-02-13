import { graphql, useStaticQuery } from "gatsby";
import { SeoQuery } from "../types";

export const useSeo = () => {
  const { site } = useStaticQuery<SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          siteUrl
          lang
          defaultTitle: title
          defaultDescription: description
          defaultImage: image
          author
          organization {
            url
            logo
          }
        }
      }
    }
  `);
  return site;
};
