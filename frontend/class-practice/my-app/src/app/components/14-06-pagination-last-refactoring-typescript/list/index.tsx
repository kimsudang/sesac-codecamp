"use client";

import { IListProps } from "./types";

export default function List(props: IListProps) {
  return (
    <div>
      {" "}
      <div style={{ margin: "10px" }}>제목 _ 작성자 _ 작성일</div>
      {props.data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          {/* apollo 변경된 경로로 재설치 필요 */}
          <span style={{ margin: "10px" }}></span>
          <span>{el.title}</span> <span>{el.writer}</span> <span>{el.createdAt}</span>
        </div>
      ))}
    </div>
  );
}
