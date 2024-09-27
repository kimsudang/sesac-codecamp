"use client";

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

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
  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const [] = useState();

  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await 나의함수({
      // variables, 이게 달러 역할을 한다.
      variables: {
        myWriter: "aa",
        myTitle: "aa",
        myContents: "aa",
      },
      // $나의작성자: "철수",
      // $나의제목: "123",
      // $나의내용: "123123",
    });
    console.log(result);
  };

  // 한 줄일 때는 괄호() 필요 없음.
  return <button onClick={onClickSubmit}>GraphQL 동기 요청하기</button>;
}
