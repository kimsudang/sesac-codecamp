"use client";

import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const StaticRoutingMovedPage = () => {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  console.log(data);

  // 초반 데이터 undefined에 기본값
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      <br />
      <div style={{ margin: "10px" }}>제목 _ 작성자 _ 작성일</div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}></span>
          <span>{el.title}</span> <span>{el.writer}</span> <span>{el.createdAt}</span>
        </div>
      ))}

      <span onClick={onClickPrevPage}>이전</span>

      {new Array(10).fill("a").map(
        (_, index) =>
          index + startPage <= lastPage && (
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

      {/* 
        1. 마지막 페이지 구하기
        2. 마지막 페이지에 의존해서 다음페이지 구현하기 
      */}
      <span onClick={onClickNextPage}>다음</span>
    </div>
  );
};

export default StaticRoutingMovedPage;
