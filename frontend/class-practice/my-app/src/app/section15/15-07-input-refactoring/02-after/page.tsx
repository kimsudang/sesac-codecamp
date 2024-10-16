"use client";

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘세팅 = gql`
  #   mutation createBoard($writer: String, $title: String, $contents: String) {
  #     createBoard(writer: $writer, title: $title, contents: $contents) {
  #       _id
  #       number
  #       message
  #     }
  #   }
  #
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  // const [writer, setWriter] = useState("");
  // const [title, setTitle] = useState("");
  // const [contents, setContents] = useState("");

  // 그래프큐엘
  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.id,
    }));
  };
  // };

  // const onChangeTitle = (event) => {
  //   setTitle(event.target.value);
  // };

  // const onChangeContents = (event) => {
  //   setContents(event.target.value);
  // };

  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await 나의함수({
      variables: { ...inputs },
    });
    console.log(result);
  };

  return (
    <>
      <input type="text" id="writer" onChange={onChangeInputs} /> <br />
      <input type="text" id="title" onChange={onChangeInputs} /> <br />
      <input type="text" id="contents" onChange={onChangeInputs} /> <br />
      <button onClick={onClickSubmit}>GraphQL 동기 요청하기</button>
    </>
  );
}
