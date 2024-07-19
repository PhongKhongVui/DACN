import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import PageButton from "./PageButton";
import { useMemo } from "react";
import { func } from "prop-types";

function Pagination({ current, total, onChange, size = 5 }) {
  const pageList = useMemo(() => {
    if (total <= size) {
      return Array.from({ length: total }, (_, i) => i + 1);
    } else if (current <= Math.ceil(size / 2)) {
      return Array.from({ length: size }, (_, i) => i + 1);
    } else if (current >= total - Math.floor(size / 2)) {
      return Array.from({ length: size }, (_, i) => total - size + i + 1);
    }

    return Array.from(
      { length: size },
      (_, i) => current - Math.floor(size / 2) + i
    );
  }, [current]);

  function handleNext() {
    if (current < total) {
      onChange(current + 1);
    }
  }

  function handlePrev() {
    if (current > 1) {
      onChange(current - 1);
    }
  }

  return (
    <div className="flex space-x-1 items-center">
      <PageButton disabled={current == 1} onClick={() => onChange(1)}>
        <HiOutlineChevronDoubleLeft className="size-4" />
      </PageButton>
      <PageButton disabled={current == 1} onClick={handlePrev}>
        <HiOutlineChevronLeft className="size-4" />
      </PageButton>
      {pageList[0] != 1 && (
        <div className="text-[--text-secondary] w-6">
          <HiOutlineDotsHorizontal className="mx-auto" />
        </div>
      )}
      {pageList.map((page) => (
        <PageButton
          key={page}
          active={page === current}
          onClick={() => onChange(page)}
        >
          {page}
        </PageButton>
      ))}
      {pageList[size - 1] != total && (
        <div className="text-[--text-secondary] w-6">
          <HiOutlineDotsHorizontal className="mx-auto" />
        </div>
      )}
      <PageButton disabled={current == total} onClick={handleNext}>
        <HiOutlineChevronRight className="size-4" />
      </PageButton>
      <PageButton disabled={current == total} onClick={() => onChange(total)}>
        <HiOutlineChevronDoubleRight className="size-4" />
      </PageButton>
    </div>
  );
}

export default Pagination;
