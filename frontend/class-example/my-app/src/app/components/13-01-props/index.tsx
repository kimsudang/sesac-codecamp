"use client";

import Box from "@/app/section13/13-01-props/page";

export default function 페이지() {
  // 1. props로 값 넘기기
  // return (
  //   <>
  //     <div>+++++ 철수 영희 훈이 +++++</div>
  //     <Box apple={3} />
  //     <div>+++++ 철수 영희 훈이 +++++</div>
  //   </>
  // );

  // 2. props로 jsx 넘기기
  return (
    <>
      <div>+++++ 철수 영희 훈이 +++++</div>
      <Box apple={<button>btn</button>} />
      <div>+++++ 철수 영희 훈이 +++++</div>
    </>
  );
}
