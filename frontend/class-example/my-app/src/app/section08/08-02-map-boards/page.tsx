"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards(page: 1) {
      number
      writer
      title
      createdAt
    }
  }
`;

const StaticRoutingMovedPage = () => {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  return (
    <>
      <div>상세페이지 1 이동이 완료되었습니다.</div>
      <br />
      <br />
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ marginRight: "10px" }}>
            <input type="checkbox" />
          </span>
          번호: {el.number} | 제목: {el.title}| 작성자: {el.writer} | 작성일: {el.createdAt}
        </div>
      ))}
      {/* <div>작성자 : {data && data.fetchBoard.writer}</div>
      <div>제목 : {data ? data.fetchBoard.title : ""}</div>
      <div>내용 : {data?.fetchBoard.contents}</div> */}
    </>
  );
};

export default StaticRoutingMovedPage;
