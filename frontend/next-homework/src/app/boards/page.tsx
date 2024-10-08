"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
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
    event.stopPropagation();
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
    <div className={styles.container}>
      <div className={styles.table}>
        {/* 목록 헤더 */}
        <div className={styles.header}>
          <span className={styles.title}>번호</span>
          <span className={styles.title}>상품명</span>
          <span className={styles.title}>작성자</span>
          <span className={styles.title}>날짜</span>
          {/* 좋아요 싫어요 아이콘 */}
          {/* <span className={styles.title}>좋아요</span>
          <span className={styles.title}>싫어요</span> */}
          <span className={styles.title}>삭제</span>
        </div>
        {data?.fetchBoards.map((el, index) => (
          <ul key={el._id} className={`${styles.header} ${styles.contentList}`}>
            <Link href={`/boards/${el._id}`} className={styles.header}>
              {/* TODO */}
              {/* 좋아요, 싫어요 버튼 제작 후 클릭 시 색 채워지면서 좋아요/싫어요 1 증가 */}
              {/* 좋아요/싫어요 중 하나라도 선택되어 있는데 다른 값 누르면 팝업 후 확인 -> updateBoard로 좋아요,싫어요 값 수정 */}
              {/* 이미 버튼이 눌려있으면 더 카운트 되지 않도록 방지하기 */}
              {/* 삭제 기능이 그냥 게시판에 있다? 말안됨 => 개인 게시글 보기 페이지 등으로 빼서 사용 */}
              <li className={`${styles.content} ${styles.number}`}>{index}</li>
              <li className={`${styles.content} ${styles.text}`}>{el.title}</li>
              <li className={`${styles.content} ${styles.text}`}>{el.writer}</li>
              <li className={`${styles.content} ${styles.number}`}>{el.createdAt.split("T")[0]}</li>
              {/* <span className={`${styles.content} ${styles.text}`}>
                like: {el.likeCount} dislike: {el.dislikeCount}
              </span> */}
            </Link>
            <button id={el._id} onClick={onClickDelete}>
              <Image src="/icons/delete.svg" alt="" width={0} height={0} className={styles.button} />
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default BoardList;
