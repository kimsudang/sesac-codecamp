"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 항상 with로그인체크 라는 이름을 사용하기 위해 export defalut안하고 그냥 export만
export const with로그인체크 = (컴포넌트: any) => (프롭스: any) => {
  const router = useRouter();

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/section23/23-04-login-localstorage-check-hoc");
    }
  }, []);

  // <컴포넌트 name={프롭스.name} age={프롭스.age} />;의 스프레드 연산자 => {...프롭스}
  return <컴포넌트 {...프롭스} />;
};
