import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi2";
import styled from "styled-components";

const PAGE_SIZE = 10;

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  gap: 6px;
`;

const PaginationButton = styled.button`
  background-color: ${(props) => (props.disabled ? "var(--color-brand-50)" : "var(--color-brand-100)")};
  color: ${(props) => (props.disabled ? "var(--color-grey-600)" : "var(--color-grey-700)")};
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

interface PaginationProps {
  totalPages: number;
  curPage: number;
  totalElements: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ totalPages, curPage, totalElements, onPageChange }: PaginationProps) {
  const nextPage = () => {
    if (curPage < totalPages) {
      onPageChange(curPage + 1);
    }
  };

  const prevPage = () => {
    if (curPage > 1) {
      onPageChange(curPage - 1);
    }
  };

  if (totalPages <= 1) return null;

  const startResult = (curPage - 1) * PAGE_SIZE + 1;
  const endResult = Math.min(curPage * PAGE_SIZE, totalElements);

  return (
    <StyledPagination>
      <p>
        Showing <span>{startResult}</span> to <span>{endResult}</span> {" of "} <span>{totalElements}</span> results.
      </p>

      <Buttons>
        <PaginationButton onClick={prevPage} disabled={curPage === 1} aria-label="Previous page">
          <HiChevronDoubleLeft /> <span>Previous</span>
        </PaginationButton>

        <PaginationButton onClick={nextPage} disabled={curPage === totalPages} aria-label="Next page">
          <span>Next</span>
          <HiChevronDoubleRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
