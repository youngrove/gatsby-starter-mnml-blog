import React from "react";
import { Frontmatter } from "../../types";
import PostInfo from "../PostInfo";
import PostTags from "../PostTags";
import { PostExcerpt, Wrapper } from "./styles";

interface PostProps {
  frontmatter?: Frontmatter;
  url?: string;
  excerpt?: string;
}
const Post = ({ frontmatter, url, excerpt }: PostProps) => {
  return (
    <Wrapper>
      <PostInfo frontmatter={frontmatter} url={url} />
      <PostExcerpt>{excerpt}</PostExcerpt>
      <PostTags tags={frontmatter?.tags}></PostTags>
    </Wrapper>
  );
};

export default Post;
