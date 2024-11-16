"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

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
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  return (
    <div>
      <div>상세페이지 1 이동이 완료되었습니다.</div>
      <br />
      {data?.fetchBoards.map((el) => (
        <Link
          key={el._id}
          href={`/section30/30-03-web-editor-hook-form-xss/${el._id}`}
        >
          <div>
            <span style={{ marginRight: "10px" }}></span>
            제목: {el.title}| 작성자: {el.writer} | 작성일: {el.createdAt}
          </div>
        </Link>
      ))}

      <br />

      {new Array(10).fill("a").map((_, index) => (
        <span key={index + 1} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
};

export default StaticRoutingMovedPage;
