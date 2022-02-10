import React from "react";
import { toUrl } from "../../utils/converter";
import { Wrapper } from "./styles";

interface FilteredTagProps {
  children: string;
  count: number;
}
const FilteredTag = ({ children, count }: FilteredTagProps) => {
  return (
    <Wrapper $count={count} to={`/tags/${toUrl(children)}`}>
      #{children}{" "}
    </Wrapper>
  );
};

export default FilteredTag;
