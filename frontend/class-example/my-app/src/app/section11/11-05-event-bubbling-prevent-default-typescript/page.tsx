"use client";

import { FetchBoardDocument, FetchBoardsDocument } from "@/commons/graphql/graphql";
import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards(page: 1) {
      number
      writer
      title
      createdAt
    }
  }
`;

const StaticRoutingMovedPage = () => {
  const { data } = useQuery(FetchBoardsDocument, (variables: {}));
  console.log(data);

  // const onClickAlert = (event) => {
  //   // event.target => 내가 클릭한 태그
  //   alert(`${event.target.id}님이 작성한 글입니다.`);
  //   // event.currentTarget => 내 클릭이 버블링되면 부모의 onClick 실행되는데, 현재 실횅된 그 태그
  //   alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  // };

  const onClickLike = (event: MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    alert(`좋아요가 +1 올랐습니다.`);
  };

  return (
    <>
      <div>상세페이지 1 이동이 완료되었습니다.</div>
      <br />
      <br />
      {data?.fetchBoards?.map((el) => (
        <a key={el.number} href="https://naver.com">
          <div id={el.writer ?? "작성자 없음"}>
            <span style={{ marginRight: "10px" }}>
              <input type="checkbox" />
            </span>
            <span>번호: {el.number}</span>
            <span>제목: {el.title}</span>
            <span>작성자: {el.writer}</span>
            <span>작성일: {el.createdAt}</span>
            <span onClick={onClickLike}>Like</span>
          </div>
        </a>
      ))}
    </>
  );
};

export default StaticRoutingMovedPage;
