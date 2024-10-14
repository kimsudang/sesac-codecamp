"use client";

export default function List({ data }) {
  return (
    <div>
      <div style={{ margin: "10px" }}>제목 _ 작성자 _ 작성일</div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}></span>
          <span>{el.title}</span> <span>{el.writer}</span> <span>{el.createdAt}</span>
        </div>
      ))}
    </div>
  );
}
