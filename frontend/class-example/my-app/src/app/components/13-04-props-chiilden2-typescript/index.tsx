"use client";

import Box from "@/app/section13/13-04-props-children2-typescript/page";

export default function 페이지() {
  return (
    <>
      <div>+++++ 철수 영희 훈이 +++++</div>
      {/* 쏙 들어가기! 땡겨오기 */}
      <Box school="aaa 초등학교">
        <div>
          <input type="text" />
          <button>버튼2</button>
          <div>안녕</div>
        </div>
      </Box>
      <div>+++++ 철수 영희 훈이 +++++</div>
    </>
  );
}
