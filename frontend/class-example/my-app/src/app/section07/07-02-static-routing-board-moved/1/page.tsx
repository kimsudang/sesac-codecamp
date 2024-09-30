"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 1) {
      writer
      title
      contents
    }
  }
`;

const StaticRoutingMovedPage = () => {
  const { data } = useQuery(FETCH_BOARD);
  console.log(data);

  return (
    <>
      <div>상세페이지 1 이동이 완료되었습니다.</div>
      {/* && 연산자 */}
      <div>작성자 : {data && data.fetchBoard.writer}</div>
      {/* 삼항 연산자 */}
      <div>제목 : {data ? data.fetchBoard.title : ""}</div>
      {/* 옵셔널 체이닝 */}
      <div>내용 : {data?.fetchBoard.contents}</div>
    </>
  );
};

export default StaticRoutingMovedPage;
