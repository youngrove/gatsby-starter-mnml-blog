import React from "react";
import { LeftIcon, Page, RightIcon, Wrapper } from "./styles";
import StyledLink from "../StyledLink";

interface PaginationProps {
  skip?: number;
  currentPage?: number;
  numPages?: number;
}
const Pagination = ({
  skip = 0,
  currentPage = 0,
  numPages = 0,
}: PaginationProps) => {
  const pageSize = 5;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const pageStep = Math.floor(numPages / pageSize);
  const start = Math.floor(skip / pageSize);

  const pages =
    numPages < pageSize
      ? numPages
      : pageStep * pageSize < currentPage
      ? numPages - pageSize
      : pageSize;

  const range = Array.from({ length: pages }).map(
    (_, i) => i + 1 + start * pageSize
  );

  return (
    <Wrapper>
      {!isFirst && (
        <StyledLink to={`/${currentPage > 2 ? currentPage - 1 : ""}`}>
          <LeftIcon />
        </StyledLink>
      )}
      {range.map((number) => {
        return (
          <Page
            key={`page-${number}`}
            to={`/${number === 1 ? "" : number}`}
            $isCurrent={number === currentPage}
          >
            {number}
          </Page>
        );
      })}
      {!isLast && (
        <StyledLink
          to={`/${currentPage === numPages ? currentPage : currentPage + 1}`}
        >
          <RightIcon />
        </StyledLink>
      )}
    </Wrapper>
  );
};

export default Pagination;
