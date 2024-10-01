"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const StaticRoutingMovedPage = () => {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async (event) => {
    try {
      const result = await deleteBoard({
        variables: {
          number: Number(event.target.id),
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      console.log(result.data?.message);
      alert("삭제가 성공적으로 수행됐습니다.");
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  return (
    <div>
      <div>상세페이지 1 이동이 완료되었습니다.</div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          {/* 1. 특별한 이유가 없으면? Fragment로 감싸자! <div></div>는 한 개 더 그리니까 */}
          {/* 2. 프레그먼트? <></>, <Fragment></Fragment> */}
          {/* 3. 프레그먼트에 key를 입력하려면? <Fragment key={1}></Fragment> */}
          {/* 4. index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 유지되므로 사실상 유일하지 않음 */}
          <span style={{ marginRight: "10px" }}>
            <input type="checkbox" />
          </span>
          <span style={{ marginRight: "10px" }}>
            번호: {el.number} | 제목: {el.title}| 작성자: {el.writer} | 작성일: {el.createdAt}
          </span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default StaticRoutingMovedPage;
