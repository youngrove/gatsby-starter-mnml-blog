import React from "react";
import { graphql, PageProps } from "gatsby";
import Container from "../layouts/Container";
import Post from "../components/Post";
import Seo from "../components/Seo/Seo";
import { IndexQuery } from "../types";

const Index = ({ data }: PageProps<IndexQuery>) => {
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
    </Container>
  );
};

export default Index;

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        gitUrl
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
