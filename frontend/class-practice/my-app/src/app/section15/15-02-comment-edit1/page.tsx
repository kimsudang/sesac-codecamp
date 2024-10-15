"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

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
  // 초기값 -1 : 아무것도 선택하지 않음 -> 수정창 안나옴
  const [myIndex, setMyIndex] = useState(-1);

  const { data } = useQuery(FETCH_BOARDS);

  const onClickEdit = (event) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  return (
    <div>
      <div>상세페이지 1 이동이 완료되었습니다.</div>
      <br />
      {data?.fetchBoards.map((el, index) =>
        myIndex !== index ? (
          <div key={el._id}>
            <span style={{ marginRight: "10px" }}></span>
            <span>{el.title}</span>
            <span>{el.writer}</span>
            <button id={index} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} />
        )
      )}
    </div>
  );
};

export default StaticRoutingMovedPage;
