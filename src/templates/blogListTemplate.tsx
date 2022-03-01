import React from "react";
import { graphql } from "gatsby";
import Container from "../layouts/Container";
import Post from "../components/Post";
import Seo from "../components/Seo/index";
import { BlogListQuery, PageContext } from "../types";
import Pagination from "../components/Pagination";

interface BlogListTemplateProps {
  data: BlogListQuery;
  pageContext: PageContext;
}

const BlogListTemplate = ({ pageContext, data }: BlogListTemplateProps) => {
  const siteTitle = data.site.siteMetadata.title;
  const gitUrl = data.site.siteMetadata.gitUrl;
  const posts = data.allMdx.edges;

  return (
    <Container title={siteTitle} gitUrl={gitUrl}>
      <Seo title={siteTitle} />
      {posts.map((item: any) => (
        <Post
          key={item.node.fields.slug}
          url={item.node.fields.slug}
          frontmatter={item.node.frontmatter}
          excerpt={item.node.excerpt}
        />
      ))}
      <Pagination
        skip={pageContext.skip}
        numPages={pageContext.numPages}
        currentPage={pageContext.currentPage}
      />
    </Container>
  );
};

export default BlogListTemplate;

export const query = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        gitUrl
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
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
