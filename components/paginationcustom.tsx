"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import cn from "classnames";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type CustomPaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const CustomPagination: React.FC<CustomPaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
}) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePageClick = (page: number, event: React.MouseEvent) => {
    event.preventDefault();
    if (isClient && page > 0 && page <= pageCount && page !== currentPage) {
      onPageChange(page);
      router.push(`/products?page=${page}`);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3;

    if (pageCount <= maxPagesToShow + 2) {
      for (let i = 1; i <= pageCount; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={i === currentPage ? "#" : `/products?page=${i}`}
              onClick={(e) => {
                if (i !== currentPage) {
                  handlePageClick(i, e);
                } else {
                  e.preventDefault();
                }
              }}
              className={cn({ active: i === currentPage })}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      pages.push(
        <PaginationItem key={1}>
          <PaginationLink
            href={currentPage === 1 ? "#" : `/products?page=1`}
            onClick={(e) => {
              if (currentPage !== 1) {
                handlePageClick(1, e);
              } else {
                e.preventDefault();
              }
            }}
            className={cn({ active: currentPage === 1 })}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage > maxPagesToShow) {
        pages.push(<PaginationItem key="ellipsis1">...</PaginationItem>);
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(pageCount - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={i === currentPage ? "#" : `/products?page=${i}`}
              onClick={(e) => {
                if (i !== currentPage) {
                  handlePageClick(i, e);
                } else {
                  e.preventDefault();
                }
              }}
              className={cn({ active: i === currentPage })}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (currentPage < pageCount - maxPagesToShow) {
        pages.push(<PaginationItem key="ellipsis2">...</PaginationItem>);
      }

      pages.push(
        <PaginationItem key={pageCount}>
          <PaginationLink
            href={
              currentPage === pageCount ? "#" : `/products?page=${pageCount}`
            }
            onClick={(e) => {
              if (currentPage !== pageCount) {
                handlePageClick(pageCount, e);
              } else {
                e.preventDefault();
              }
            }}
            className={cn({ active: currentPage === pageCount })}
          >
            {pageCount}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={currentPage > 1 ? `/products?page=${currentPage - 1}` : "#"}
            onClick={(e) => {
              if (currentPage > 1) {
                handlePageClick(currentPage - 1, e);
              } else {
                e.preventDefault();
              }
            }}
            className={cn({ disabled: currentPage === 1 })}
            style={{
              opacity: currentPage === 1 ? 0.5 : 1,
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>
        {renderPageNumbers()}
        <PaginationItem>
          <PaginationNext
            href={
              currentPage < pageCount
                ? `/products?page=${currentPage + 1}`
                : "#"
            }
            onClick={(e) => {
              if (currentPage < pageCount) {
                handlePageClick(currentPage + 1, e);
              } else {
                e.preventDefault();
              }
            }}
            className={cn({ disabled: currentPage === pageCount })}
            style={{
              opacity: currentPage === pageCount ? 0.5 : 1,
              cursor: currentPage === pageCount ? "not-allowed" : "pointer",
            }}
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
