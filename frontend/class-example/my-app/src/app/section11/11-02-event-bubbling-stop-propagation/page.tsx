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

  // const onClickAlert = (event) => {
  //   // event.target => 내가 클릭한 태그
  //   alert(`${event.target.id}님이 작성한 글입니다.`);
  //   // event.currentTarget => 내 클릭이 버블링되면 부모의 onClick 실행되는데, 현재 실횅된 그 태그
  //   alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  // };

  const qqq1 = () => {
    alert(`1번 클릭`);
  };

  const qqq2 = () => {
    alert(`2번 클릭`);
  };

  const qqq3 = () => {
    alert(`3번 클릭`);
  };

  const qqq4 = () => {
    alert(`4번 클릭`);
  };

  const qqq5 = () => {
    alert(`5번 클릭`);
  };

  const qqq6 = (event) => {
    event.stopPropagation();
    alert(`6번 클릭`);
  };

  const qqq7 = () => {
    alert(`7번 클릭`);
  };

  return (
    <>
      <div>상세페이지 1 이동이 완료되었습니다.</div>
      <br />
      <br />
      {data?.fetchBoards.map((el) => (
        <div key={el.number} id={el.writer} onClick={qqq1}>
          <span style={{ marginRight: "10px" }} onClick={qqq2}>
            <input type="checkbox" onClick={qqq3} />
          </span>
          <span onClick={qqq4}>번호: {el.number}</span>
          <span onClick={qqq5}>제목: {el.title}</span>
          <span onClick={qqq6}>작성자: {el.writer}</span>
          <span onClick={qqq7}>작성일: {el.createdAt}</span>
        </div>
      ))}
    </>
  );
};

export default StaticRoutingMovedPage;
