"use client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useEffect } from "react";

// 이전 버전에 호환되는 웹 에디터를 사용하기 위해 프론트엔드 서버에 import가 아닌 브라우저에 import했던 경우
// ReactQuill => 컴포넌트를 import 해서 jsx로 render하기 위한 컴포넌트 => dynamic 명령어로 동적 import
const ReactQuill = dynamic(() => import("react-quill"), {
  // 서버사이드에서는 import 어떻게 할래? 안할래
  ssr: false,
});

export default function WebEditorPage() {
  const onSubmit = async (event) => {
    // form은 기본적으로 페이지를 이동하려는 속성이 있음 => 리액트는 SPA =>
    // 따라서 페이지는 이동하지 않지만, 기본 속성때문에 깜빡임 발생 => 막아주려고 작성
    event.preventDefault();

    // 사전에 라이브러리들을 전부 받는게 아닌(속도 느림), event발생 시(버튼 클릭 등) 받아오도록 동적으로 import 하기
    // 받아오는데 시간이 걸리니까 비동기 처리하기
    const { Modal } = await import("antd"); // code-spliting(코드 스플릿팅) => 코드를 나눈것
    Modal.success({ content: "게시글 등록에 성공했습니다." });
  };

  // 버튼 클릭시 받으면 느리니까 useEffect로 뒤에서 몰래 받기
  // useEffect(() => {
  //   const { Modal } = await import("antd");
  // }, []);

  // ReactQuill 만든 사람들이 만든 onChange => 따라서 event 안들어옴
  const onChangeContents = (value) => {
    console.log(value);
  };
  return (
    // form은 기본적으로 페이지를 이동하려는 속성이 있음.
    <form onSubmit={onSubmit}>
      작성자: <input type="text" /> <br />
      비밀번호: <input type="password" /> <br />
      제목: <input type="text" /> <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button type="submit">등록</button>
    </form>
  );
}
