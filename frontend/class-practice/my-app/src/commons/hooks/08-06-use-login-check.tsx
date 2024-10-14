"use client";

import { useRouter } from "next/navigation";

export const useLoginCheck = () => {
  const router = useRouter();

  // 여기서는 use, set 안붙이기! (사회적 약속)
  const loginCheck = () => {
    // 1. 로그인 페크

    // 2. 실패하면?
    alert("아직 로그인을 안하셨군요");
    router.push("/section08/08-06-custom-hook-login");
  };

  return {
    loginCheck,
  };
};
