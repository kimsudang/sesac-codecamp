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

const StaticRoutingMovedPage = () => {
  // 첫 페이지 1에서 시작 => 초가값 1
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    setStartPage(startPage + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <br />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}></span>
          제목: {el.title}| 작성자: {el.writer} | 작성일: {el.createdAt}
        </div>
      ))}

      <span onClick={onClickPrevPage}>이전</span>

      {new Array(10).fill("a").map((_, index) => (
        <span key={index + startPage} id={String(index + startPage)} onClick={onClickPage}>
          {index + startPage}
        </span>
      ))}

      <span onClick={onClickNextPage}>다음</span>
    </div>
  );
};

export default StaticRoutingMovedPage;
