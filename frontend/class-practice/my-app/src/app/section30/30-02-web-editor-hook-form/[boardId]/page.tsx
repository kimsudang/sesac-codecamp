"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
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
      boardId: params.boardId,
    },
  });

  console.log(data);

  return (
    <>
      {/* <div>상세페이지 {params.pageNum} 이동이 완료되었습니다.</div> */}
      <div>작성자 : {data && data.fetchBoard.writer}</div>
      <div>제목 : {data ? data.fetchBoard.title : ""}</div>
      {/* <div>내용 : {data?.fetchBoard.contents}</div>  */}
      {/* result: <p>qq<strong>q</strong>q</p> */}

      {/* 내용에 들어있는 태그를 문자열이 아닌 진짜 태그로 인식하기 */}
      <div
        dangerouslySetInnerHTML={{
          __html: data.fetchBoard.contents,
        }}
      ></div>
    </>
  );
};

export default StaticRoutingMovedPage;
