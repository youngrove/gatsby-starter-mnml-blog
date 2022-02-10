import React from "react";
import Container from "../layouts/Container/index";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PostInfo from "../components/PostInfo";
import PostTags from "../components/PostTags";
import Seo from "../components/Seo/Seo";
import { BlogPostQuery } from "../types/index";

const BlogPostTemplates = ({ data }: PageProps<BlogPostQuery>) => {
  const siteTitle = data.site.siteMetadata.title;
  const post = data.mdx;
  const content = post.body;
  const tagList = post.frontmatter.tags;

  return (
    <Container title={siteTitle}>
      <Seo title={siteTitle} />
      <PostInfo frontmatter={post?.frontmatter} />
      <MDXRenderer>{content}</MDXRenderer>
      <PostTags tags={tagList}></PostTags>
    </Container>
  );
};

export default BlogPostTemplates;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
