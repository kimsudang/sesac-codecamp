"use client";
import Rsc from "../32-03-parent-rcc-with-child-rsc";

// => 클라이언트 컴포넌트

export default function Rcc({ children }) {
  console.log("클라이언트 컴포넌트가 렌더링되었습니다.");

  return (
    <>
      <div>저는 클라이언트 컴포넌트입니다.</div>
      {/* 부모가 클라이언트 컴포넌트임 => Rsc도 클라이언트 방식으로 동작 */}
      {/* <Rsc /> */}
      {/* children props로 받아왔기 때문에 Rcc의 state가 변화해도 children 영향 없음. */}
      <>{children}</>
    </>
  );
}
