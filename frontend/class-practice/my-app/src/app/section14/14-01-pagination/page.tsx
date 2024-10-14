"use client";

import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

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
  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <div>
      <div>상세페이지 1 이동이 완료되었습니다.</div>
      <br />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}></span>
          제목: {el.title}| 작성자: {el.writer} | 작성일: {el.createdAt}
        </div>
      ))}

      <br />

      {new Array(10).fill("a").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}

      {/* _ : 사용하지 않는 매개변수
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>;
      ))} */}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>;
      ))} */}

      {/* <span id="1" onClick={onClickPage}>
        {" "}
        1{" "}
      </span>
      <span id="2" onClick={onClickPage}>
        {" "}
        2{" "}
      </span>
      <span id="3" onClick={onClickPage}>
        {" "}
        3{" "}
      </span> */}
    </div>
  );
};

export default StaticRoutingMovedPage;
