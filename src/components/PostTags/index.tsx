import React from "react";
import Tag from "../Tag";
import { Wrapper } from "./styles";

const PostTags = ({ tags }: { tags?: string[] }) => {
  return (
    <Wrapper>
      {tags?.map((item: any, idx: number) => (
        <Tag key={idx}>{item}</Tag>
      ))}
    </Wrapper>
  );
};

export default PostTags;
