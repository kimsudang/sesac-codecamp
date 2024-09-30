"use client";

import { useRouter } from "next/navigation";

const StaticRoutingPage = () => {
  const 라우터 = useRouter();

  const onClickSubmit = () => {
    // 1. 게시글 등록
    // ...
    // 2. 등록된 페이지로 이동하기
    라우터.push("/section07/07-01-static-routing-moved");
  };

  return (
    <>
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
};

export default StaticRoutingPage;
