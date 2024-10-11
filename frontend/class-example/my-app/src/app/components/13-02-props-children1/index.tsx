"use client";

import Box from "@/app/section13/13-02-props-children1/page";

export default function 페이지() {
  // 1. children 넘기기 1먼ㄸ
  // return (
  //   <>
  //     <div>+++++ 철수 영희 훈이 +++++</div>
  //     <Box children={<button>btn</button>} />
  //     <div>+++++ 철수 영희 훈이 +++++</div>
  //   </>
  // );

  // 2. children 넘기기 2
  // return (
  //   <>
  //     <div>+++++ 철수 영희 훈이 +++++</div>
  //     <Box>
  //       <button>버튼2</button>
  //     </Box>
  //     <div>+++++ 철수 영희 훈이 +++++</div>
  //   </>
  // );

  // 3. 만약, 둘 다 있으면?
  return (
    <>
      <div>+++++ 철수 영희 훈이 +++++</div>
      <Box children={<button>버튼1</button>}>
        <button>버튼2</button>
      </Box>
      <div>+++++ 철수 영희 훈이 +++++</div>
    </>
  );
}
