import React from "react";
import Container from "../layouts/Container/index";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PostInfo from "../components/PostInfo";
import PostTags from "../components/PostTags";
import Seo from "../components/Seo/index";
import { BlogPostQuery } from "../types/index";
import Utterances from "../components/Utterances";

const BlogPostTemplates = ({ data, path }: PageProps<BlogPostQuery>) => {
  const post = data.mdx;
  const utterances_repo = data.site.siteMetadata.utterances;
  const siteTitle = data.site.siteMetadata.title;
  const gitUrl = data.site.siteMetadata.gitUrl;
  const tagList = post.frontmatter.tags;
  const description = post.frontmatter.description;
  const content = post.body;
  const date = post.frontmatter.date;

  return (
    <Container title={siteTitle} gitUrl={gitUrl}>
      <Seo
        title={siteTitle}
        isPosting={true}
        desc={description}
        pathname={path}
        postDate={date}
      />
      <PostInfo frontmatter={post?.frontmatter} />
      <MDXRenderer>{content}</MDXRenderer>
      <PostTags tags={tagList}></PostTags>
      <Utterances repo={utterances_repo}></Utterances>
    </Container>
  );
};

export default BlogPostTemplates;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        gitUrl
        utterances
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
