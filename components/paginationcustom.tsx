//pagination styling

"use client";

import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";

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

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const handlePageClick = (page: number, event: React.MouseEvent) => {
    event.preventDefault();
    if (isClient && page > 0 && page <= pageCount) {
      onPageChange(page);
      router.push(`/products?page=${page}`);
    } else {
      return;
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`/products?page=${currentPage - 1}`}
            onClick={(e) => handlePageClick(currentPage - 1, e)}
            className={currentPage === 1 ? "disabled" : ""}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href="#" onClick={(e) => handlePageClick(page, e)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={`/products?page=${currentPage + 1}`}
            onClick={(e) => handlePageClick(currentPage + 1, e)}
            className={currentPage === pageCount ? "disabled" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
