import { useSearchParams } from "react-router";
import styled, { css } from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

const PAGE_SIZE = 2;

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #fff;
  padding: 8px;
  border-radius: 10px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 6px;
`;

interface PaginationButtonProps {
  buttonStyle: "numb" | "btn";
  isActive: boolean;
}

const PaginationButton = styled.button<PaginationButtonProps>`
  color: var(--color-grey-700);
  line-height: 45px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover:not(:disabled) {
    color: #fff;
    background: var(--color-grey-700);
  }

  &:active:not(:disabled) {
    color: #fff;
    background: var(--color-grey-700);
  }

  ${(props) =>
    props.buttonStyle === "numb" &&
    css`
      height: 45px;
      width: 45px;
      margin: 0 3px;
      line-height: 45px;
      border-radius: 50%;
    `}

  ${(props) =>
    props.buttonStyle === "btn" &&
    css`
      padding: 0 20px;
      border-radius: 50px;
    `}

  ${(props) =>
    props.isActive &&
    css`
      background-color: var(--color-grey-700);
      color: #fff;
    `}
`;

interface PaginationProps {
  count: number;
}

// const P = styled.p`
//   color: black;
// `;

export default function Pagination({ count }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  const [pageNumbers, setPageNumbers] = useState<(number | string)[]>([]);

  function nextPage() {
    if (currentPage < pageCount) {
      const next = currentPage + 1;
      searchParams.set("page", next.toString());
      setSearchParams(searchParams);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      const prev = currentPage - 1;
      searchParams.set("page", prev.toString());
      setSearchParams(searchParams);
    }
  }

  function goToPage(page: number | string) {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  useEffect(() => {
    const updatedPageNumbers = [];
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(pageCount, currentPage + 1);

    if (currentPage > 2) {
      updatedPageNumbers.push(1);
      if (currentPage > 3) {
        updatedPageNumbers.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i <= pageCount) updatedPageNumbers.push(i);
    }

    if (currentPage < pageCount - 1) {
      if (currentPage < pageCount - 2) {
        updatedPageNumbers.push("...");
      }
      updatedPageNumbers.push(pageCount);
    }

    setPageNumbers(updatedPageNumbers); // Cập nhật lại pageNumbers
  }, [currentPage, pageCount]);

  return (
    <StyledPagination>
      <Buttons>
        {/* Nút chuyển về trang trước */}
        <PaginationButton
          buttonStyle="btn"
          onClick={prevPage}
          disabled={currentPage === 1}
          aria-label="Previous page"
          isActive={false}
        >
          <FaArrowCircleLeft />
          <span>Previous</span>
        </PaginationButton>

        {/* Các nút chuyển trang đánh số */}
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <PaginationButton
                key={index}
                buttonStyle="numb"
                disabled={true}
                isActive={false}
              >
                {page}
              </PaginationButton>
            );
          } else {
            return (
              <PaginationButton
                key={index}
                buttonStyle="numb"
                onClick={() => goToPage(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationButton>
            );
          }
        })}

        {/* Chuyển về trang sau */}
        <PaginationButton
          buttonStyle="btn"
          onClick={nextPage}
          disabled={currentPage === pageCount}
          aria-label="Next page"
          isActive={false}
        >
          <span>Next</span>
          <FaArrowCircleRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
