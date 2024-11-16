"use client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

// 이전 버전에 호환되는 웹 에디터를 사용하기 위해 프론트엔드 서버에 import가 아닌 브라우저에 import했던 경우
// ReactQuill => 컴포넌트를 import 해서 jsx로 render하기 위한 컴포넌트 => dynamic 명령어로 동적 import
const ReactQuill = dynamic(() => import("react-quill"), {
  // 서버사이드에서는 import 어떻게 할래? 안할래
  ssr: false,
});

export default function WebEditorPage() {
  const router = useRouter();
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  // setValue => state 변경된 값을 hook-form으로 강제로 넣을 수 있음
  // trigger => state 변경된 값의 변화를 감지 => 해당 변화 사용 가능(검증 등)
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    // event.preventDefault(); // handleSubmit에서 자동으로 해줌
    console.log(data);

    const result = await 나의함수({
      // variables 이게 $역할을 함
      variables: {
        createBoardInput: {
          ...data,
          // writer: data.writer,
          // password: data.password,
          // title: data.title,
          // contents: data.contents,
        },
      },
    });

    console.log(result);

    const { Modal } = await import("antd"); // code-spliting(코드 스플릿팅) => 코드를 나눈것
    Modal.success({ content: "게시글 등록에 성공했습니다." });

    const boardId = result.data.createBoard._id;
    router.push(`/section30/30-02-web-editor-hook-form/${boardId}`);
  };

  // ReactQuill 만든 사람들이 만든 onChange => 따라서 event 안들어옴
  const onChangeContents = (value) => {
    console.log(value);

    // register로 등록하는게 아닌, 강제로 값 넣어주기 (키-값)
    // 값만 들어갔지 감지는 못함(검증도 못하게 됨) => trigger 사용(검증 가능)
    setValue("contents", value);
    trigger("contents");
  };
  return (
    // form은 기본적으로 페이지를 이동하려는 속성이 있음.
    <form onSubmit={handleSubmit(onSubmit)}>
      작성자: <input type="text" {...register("writer")} /> <br />
      비밀번호: <input type="password" {...register("password")} /> <br />
      제목: <input type="text" {...register("title")} /> <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button type="submit">등록</button>
    </form>
  );
}
