"use client";

import { ChangeEvent, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/navigation";

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($myWriter: String, $myTitle: String, $myContents: String) {
    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
      _id
      number
      message
    }
  }
`;

const StaticRoutingPage = () => {
  const router = useRouter();

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
    // try에 있는 내용을 시도하다가 실패하면, 그 아랫줄들을 무시하고 catch로 넘어감
    try {
      const result = await 나의함수({
        variables: {
          myWriter: writer,
          myTitle: title,
          myContents: contents,
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);

      alert("게시글 등록에 성공하였습니다.");

      const url = result.data.createBoard.number;

      router.push(`/section07/07-04-dynamic-routing-board-mutation-moved/${url}`);
    } catch (error) {
      console.log(error);
      alert(`게시글 등록에 실패하였습니다. \n 에러코드: ${error}`);
    }
  };
  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} /> <br />
      제목: <input type="text" onChange={onChangeTitle} /> <br />
      내용: <input type="text" onChange={onChangeContents} /> <br />
      <button onClick={onClickSubmit}>GraphQL 동기 요청하기</button>
    </>
  );
};

export default StaticRoutingPage;
