import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { useSearchParams } from "react-router";
import styled from "styled-components";
const PAGE_SIZE = 10;

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 14px;
  margin-left: 8px;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 6px;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.disabled ? " var(--color-brand-50)" : "var(--color-brand-100)"};
  color: ${(props) =>
    props.disabled ? " var(--color-grey-600)" : "var(--color-grey-700)"};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 12px;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 4px;
  }

  &:has(span:first-child) {
    padding-right: 4px;
  }

  & svg {
    height: 18px;
    width: 18px;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-50);
    color: var(--color-grey-700);
  }
`;

export default function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage * PAGE_SIZE > count ? count : currentPage * PAGE_SIZE}
        </span>
        {" of"} <span> {count} </span> results.
        {/* Showing <span> 1 </span> to <span> 20 </span> {" of"}{" "} */}
        {/* <span>{count} </span> results. */}
      </p>

      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage == 1}>
          <HiChevronDoubleLeft /> <span>Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={nextPage}
          disabled={currentPage == pageCount}
        >
          <span>Next</span>
          <HiChevronDoubleRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
