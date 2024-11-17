"use client";

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
  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log(data);

  // 1. 리팩토링 전
  // const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
  //   refetch({ page: Number(event.currentTarget.id) });
  // };

  // 2. 리팩토링 후
  // 이벤트 안받는 것처럼 보여도 받고 있음. 사용하지 않아서 명시하지 않음
  // 후에 명시적으로 사용할 때 (page:number) => (event) 이렇게 해주면 됨
  const onClickPage = (page: number) => () => {
    // 숏핸드 프로퍼티에 의해 page: page => page
    refetch({ page });
  };

  return (
    <div>
      <div>상세페이지 1 이동이 완료되었습니다.</div>
      <br />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}></span>
          제목: {el.title}| 작성자: {el.writer} | 작성일: {el.createdAt}
        </div>
      ))}

      <br />

      {new Array(10).fill("a").map((_, index) => (
        // HOF이라서 ()하나 더 붙였음. (page:number) => () => 이부분에서 괄호 하나 더 사용했기 때문에 아래도 ()
        <span key={index + 1} onClick={onClickPage(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
};

export default StaticRoutingMovedPage;
