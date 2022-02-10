import React from "react";
import { Frontmatter } from "../../types";
import { PostDate, PostTitle, TitleWrapper } from "./styles";

interface PostInfoProps {
  frontmatter?: Frontmatter;
  url?: string;
}

const PostInfo = ({ frontmatter, url }: PostInfoProps) => {
  return (
    <>
      <TitleWrapper>
        <PostTitle href={url}>{frontmatter?.title}</PostTitle>
      </TitleWrapper>
      <PostDate>{frontmatter?.date}</PostDate>
    </>
  );
};

export default PostInfo;
