"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(1);

  // 1. componentDidMount와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행");
    // ex: API 요청, 인풋 포커스 깜빡임 등})
  }, []);

  // 2. componentDidMount + componentDidUpdate 와 동일
  useEffect(() => {
    console.log("변경하고 나서 실행");
  });

  useEffect(() => {
    // 3. componentWillUnmount와 동일 => clean-up 함수 라고 부름
    return () => {
      console.log("사라지기 전에 실행");
      // ex: 채팅방 나가기 API 요청, 불필요한 타이머 삭제 등 청소하기}}
    };
  }, []);

  const onClickCountUP = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>카운트: {count}</div>
      <button onClick={onClickCountUP}>카운트 올리는 버튼</button>
      <Link href={"/"}>나가기</Link>
    </>
  );
}
