"use client";

import { FetchBoardDocument } from "@/commons/graphql/graphql";
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

  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      mynumber: Number(params.pageNum),
    },
  });

  console.log(data);

  return (
    <>
      {/* fetchBoard가 삭제된 글인 경우, null이나 undefined일 수 있음. */}
      <div>상세페이지 {params.pageNum} 이동이 완료되었습니다.</div>
      <div>작성자 : {data?.fetchBoard?.writer}</div>
      <div>제목 : {data?.fetchBoard?.title}</div>
      <div>내용 : {data?.fetchBoard?.contents}</div>
    </>
  );
};

export default StaticRoutingMovedPage;
