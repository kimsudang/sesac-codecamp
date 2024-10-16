"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(1);

  // 1. useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행");

    return () => {
      console.log("사라지기 전에 실행");
    };
    // [] : 의존성 배열 ->  안의 값이 변경되었을 때 useEffect 실행, state나 props여야 다시 실행됨(변경시 컴포넌트 리렌더 되는 애들)
    // [] 없으면 뭐 하나라도 변경 시 다시 실행 (렌더링 후마다 재실행)
    // [] 안에 아무런 값도 없다면 처음 그려진 후 한 번만 실행됨 (componentDidMount와 유사한 동작).
    // 컴포넌트가 언마운트될 때 return 안의 함수가 실행됨 (componentWillUnmount와 유사).
  }, []);

  // 2. useEffect 잘못된 사용법(1. 추가적인 렌더링이 들어가는 경우, 2. 무한루프)
  // useEffect(() => {
  // 상태변화 발생 => 리렌더링 발생 => useEffect도 중복 발생 (가급적 사용 금지)
  // setCount((prev) => prev + 1);
  // }, [count]);
  // Chat-GPT
  // => 잘못된 이유: useEffect가 count에 의존하고 있고, useEffect 내에서 setCount를 호출하면 count가
  // 변경될 때마다 리렌더링이 발생하고 다시 useEffect가 실행되며 setCount를 호출하게 됨.
  // 결국 무한루프에 빠지게 됨.
  // 이러한 무한 루프는 성능 저하를 일으키고 브라우저 크래시를 유발할 수 있음.
  // 해결 방법: setState를 의존성 배열 없이 사용하거나, 다른 방식으로 상태 업데이트를 처리.

  const onClickCountUP = () => {
    setCount(count + 1);
  };

  console.log("나는 언제 실행되게?!");

  return (
    <>
      <div>카운트: {count}</div>
      <button onClick={onClickCountUP}>카운트 올리는 버튼</button>
      <Link href={"/"}>나가기</Link>
    </>
  );
}
