"use client";

import CommentItem from "@/app/components/15-05-comment-edit3-typescript";
import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import { gql, useQuery } from "@apollo/client";

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
  const { data } = useQuery(FetchBoardsDocument);

  return (
    <div>
      <div>상세페이지 1 이동이 완료되었습니다.</div>
      <br />
      {data?.fetchBoards?.map((el) => (
        <CommentItem key={el._id} el={el} />
      ))}
    </div>
  );
};

export default StaticRoutingMovedPage;
