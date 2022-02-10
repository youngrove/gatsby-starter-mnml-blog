import React from "react";
import FilteredTag from "../../components/FilteredTag";
import { useTopTag } from "../../hooks/useTopTag";
import { TagWrapper, Wrapper } from "./styles";

const Aside = () => {
  const tags = useTopTag();
  return (
    <Wrapper>
      <TagWrapper>Tags</TagWrapper>
      {Object.keys(tags).map((item) => (
        <FilteredTag count={tags[item]} key={item}>
          {item}
        </FilteredTag>
      ))}
    </Wrapper>
  );
};

export default Aside;
