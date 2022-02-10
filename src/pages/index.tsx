import React from "react";
import { graphql } from "gatsby";
import Container from "../layouts/Container";
import Post from "../components/Post";
import Seo from "../components/Seo/Seo";

interface IndexProps {
  data: GatsbyTypes.IndexPageQuery;
}

const Index = ({ data }: IndexProps) => {
  const siteTitle = data.site?.siteMetadata?.title as string;
  const posts = data.allMdx.edges;
  return (
    <Container title={siteTitle}>
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
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
