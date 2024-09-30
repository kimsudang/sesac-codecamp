"use client";

import { useRouter } from "next/navigation";

const StaticRoutingPage = () => {
  const 라우터 = useRouter();

  const onClickSubmit1 = () => {
    // 1. 게시글 등록
    // ...
    // 2. 등록된 페이지로 이동하기
    라우터.push("/section07/07-02-static-routing-board-moved/1");
  };

  const onClickSubmit2 = () => {
    라우터.push("/section07/07-02-static-routing-board-moved/2");
  };

  const onClickSubmit3 = () => {
    라우터.push("/section07/07-02-static-routing-board-moved/3");
  };

  return (
    <>
      <button onClick={onClickSubmit1}>게시글 1번 등록하기</button>
      <br />
      <button onClick={onClickSubmit2}>게시글 2번 등록하기</button>
      <br />
      <button onClick={onClickSubmit3}>게시글 3번 등록하기</button>
      <br />
    </>
  );
};

export default StaticRoutingPage;
