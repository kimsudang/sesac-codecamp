"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import Link from "next/link";

const FETCH_BOARDS = gql`
  query {
    fetchBoards(page: 1) {
      _id
      writer
      title
      likeCount
      dislikeCount
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const BoardList = () => {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async (event) => {
    try {
      const result = await deleteBoard({
        variables: {
          boardId: event.target.id,
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
      {/* 목록 헤더 */}
      <div>
        <div>
          <input type="checkbox" />
        </div>
        <div>번호</div>
        <div>상품명</div>
        <div>작성자</div>
        <div>날짜</div>
        {/* 좋아요 싫어요 아이콘 */}
        <div></div>
        <div>삭제</div>
      </div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>
            <input type="checkbox" />
          </span>
          <Link href={`/boards/${el._id}`}>
            {/* TODO */}
            {/* 좋아요, 싫어요 버튼 제작 후 클릭 시 색 채워지면서 좋아요/싫어요 1 증가 */}
            {/* 좋아요/싫어요 중 하나라도 선택되어 있는데 다른 값 누르면 팝업 후 확인 -> updateBoard로 좋아요,싫어요 값 수정 */}
            {/* 이미 버튼이 눌려있으면 더 카운트 되지 않도록 방지하기 */}
            {/* 삭제 기능이 그냥 게시판에 있다? 말안됨 => 개인 게시글 보기 페이지 등으로 빼서 사용 */}
            <span>
              번호: {index} | 제목: {el.title}| 작성자: {el.writer} | {el.createdAt.split("T")[0]} | like:{" "}
              {el.likeCount} dislike: {el.dislikeCount}
            </span>
          </Link>
          <span>
            <button id={el._id} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
      {/* 페이지네이션 => 컴포넌트 */}
      <div></div>
    </div>
  );
};

export default BoardList;
