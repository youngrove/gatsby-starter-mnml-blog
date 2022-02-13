import { graphql, useStaticQuery } from "gatsby";
import { TagsQuery } from "../types";

interface TagList {
  [key: string]: number;
}
export const useTopTag = () => {
  let tagList: TagList = {};
  const {
    allMdx: { edges },
  } = useStaticQuery<TagsQuery>(graphql`
    query Tags {
      allMdx(filter: { frontmatter: { tags: { ne: null } } }) {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);
  edges.map(({ node: { frontmatter } }) => {
    if (frontmatter.tags) {
      frontmatter.tags.forEach((item) => {
        if (item !== undefined) {
          tagList[item] = (tagList[item] || 0) + 1;
        }
      });
    }
  });
  return tagList;
};
