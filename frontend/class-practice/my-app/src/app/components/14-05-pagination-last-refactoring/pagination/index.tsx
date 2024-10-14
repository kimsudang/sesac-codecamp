"use client";

import { usePagination } from "./hook";

export default function Pagination(props) {
  const { startPage, onClickPage, onClickPrevPage, onClickNextPage } = usePagination(props);
  return (
    <div>
      <span onClick={onClickPrevPage}>이전</span>

      {new Array(10).fill("a").map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ margin: "5px" }}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음</span>
    </div>
  );
}
