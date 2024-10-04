"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($mynumber: Int) {
    fetchBoard(number: $mynumber) {
      writer
      title
      contents
    }
  }
`;

const StaticRoutingMovedPage = () => {
  // 신버전 방식
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      mynumber: Number(params.number),
    },
  });

  console.log(data);

  return (
    <>
      <div>상세페이지 {params.number} 이동이 완료되었습니다.</div>
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
