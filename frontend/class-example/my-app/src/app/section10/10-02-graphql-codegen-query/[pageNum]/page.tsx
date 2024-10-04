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
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      mynumber: Number(params.pageNum),
    },
  });

  console.log(data);

  return (
    <>
      <div>상세페이지 {params.pageNum} 이동이 완료되었습니다.</div>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
    </>
  );
};

export default StaticRoutingMovedPage;
