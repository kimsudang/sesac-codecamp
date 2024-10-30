"use client";

import { useMutation, gql } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

// const 나의그래프큐엘세팅 = gql`
//   mutation createBoard(
//     $myWriter: String
//     $myTitle: String
//     $myContents: String
//   ) {
//     createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
//       _id
//       number
//       message
//     }
//   }
// `;

export default function GraphqlMutationPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  // const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async (data) => {
    console.log(data);

    // const result = await 나의함수({
    //   variables: {
    //     myWriter: data.writer,
    //     myTitle: data.title,
    //     myContents: data.contents,
    //   },
    // });
    // console.log(result);

    console.log("리렌더링 될까요?");
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      <br />
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <br />
      내용: <input type="text" {...register("contents")} />{" "}
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <br />
      {/* 객체 입력은 아래같이 */}
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      <br />
      <button disabled={!formState.isValid}>GraphQL 동기 요청하기</button>
    </form>
  );
}

/*
<form>
  <button type="button"></button> // 내가 onClick 추가하고 싶을 때
  <button type="reset"></button> // 폼 안에 있는 인풋 초기화하고 싶을 때
  <button type="submit"></button> // 폼 등록/수정 등 하고 싶을 때 => 디폴트!
</form>
*/
