"use client";

import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

// gql : 그래피큐엘 작성 공간. 안에서는 그래피큐엘 문법 따라야 함
const 나의그래프큐엘세팅 = gql`
  # 타입 적는 곳: 그래피큐엘 영역이니까 그래피큐엘 타입.
  mutation createBoard($myWriter: String, $myTitle: String, $myContents: String) {
    # 전달할 변수 적는 곳
    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // 그래프큐엘
  const [나의함수] = useMutation(나의그래프큐엘세팅);

  // useState 힘수
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await 나의함수({
      // variables, 이게 달러 역할을 한다.
      variables: {
        myWriter: writer,
        myTitle: title,
        myContents: contents,
      },
      // $나의작성자: "철수",
      // $나의제목: "123",
      // $나의내용: "123123",
    });
    console.log(result);
  };

  return (
    <>
      <input type="text" onChange={onChangeWriter} /> <br />
      <input type="text" onChange={onChangeTitle} /> <br />
      <input type="text" onChange={onChangeContents} /> <br />
      <button onClick={onClickSubmit}>GraphQL 동기 요청하기</button>
    </>
  );
}
