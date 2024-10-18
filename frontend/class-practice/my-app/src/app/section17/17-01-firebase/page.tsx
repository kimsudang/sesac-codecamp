"use client";

// 파이어스토어에 접근
import { firebaseApp } from "@/commons/library/17-01-firebase";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

export default function FirebasePage() {
  const onClickSubmit = async () => {
    // 파이어스토어에 접근하는데? 그 접근을 firebaseApp로 불러온다(여기 파이어스토어 정보 존재)
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "철수",
      title: "안녕하세요",
      contents: "반갑습니다.",
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}

// 1. 파이어베이스 프로젝트 만들기
// 2, 접속정보 복사해요기
// 3. firebase 디비 생성하기
