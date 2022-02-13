import { graphql } from "gatsby";
import React from "react";
import Post from "../components/Post";
import Seo from "../components/Seo";
import Container from "../layouts/Container";
import { ArchiveWrapper } from "../layouts/Container/styles";
import { PageContext, TagListQuery } from "../types/index";

interface TagListTemplateProps {
  data: TagListQuery;
  pageContext: PageContext;
}

const TagListTemplate = ({ pageContext, data }: TagListTemplateProps) => {
  const siteTitle = data.site.siteMetadata?.title;
  const gitUrl = data.site.siteMetadata.gitUrl;
  const posts = data.allMdx.edges;

  return (
    <Container title={siteTitle} gitUrl={gitUrl}>
      <Seo title={siteTitle}></Seo>
      <ArchiveWrapper>TAG ARCHIVES: #{pageContext.tag}</ArchiveWrapper>
      {posts.map((item: any) => (
        <Post
          key={item.node.fields.slug}
          url={item.node.fields.slug}
          frontmatter={item.node.frontmatter}
          excerpt={item.node.excerpt}
        />
      ))}
    </Container>
  );
};

export default TagListTemplate;

export const query = graphql`
  query TagList($tag: [String]!) {
    site {
      siteMetadata {
        title
        gitUrl
      }
    }
    allMdx(filter: { frontmatter: { tags: { in: $tag } } }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
