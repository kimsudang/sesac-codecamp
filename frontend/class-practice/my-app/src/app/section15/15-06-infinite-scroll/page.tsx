"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const [hasMore, setHasMore] = useState(true);

  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onNext = () => {
    if (data === undefined) return;

    fetchMore({
      variables: { mypage: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards?.length) {
          setHasMore(false);
          return;
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div>
      <InfiniteScroll
        next={onNext}
        hasMore={hasMore}
        loader={<div>로딩중입니다.</div>}
        dataLength={data?.fetchBoards.length ?? 0}
      >
        <div>상세페이지 1 이동이 완료되었습니다.</div>
        <br />
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ marginRight: "10px" }}></span>
            제목: {el.title}| 작성자: {el.writer} | 작성일: {el.createdAt}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default StaticRoutingMovedPage;
