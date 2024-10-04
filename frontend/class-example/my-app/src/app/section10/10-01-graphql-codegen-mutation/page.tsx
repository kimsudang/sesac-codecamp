"use client";

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($myWriter: String, $myTitle: String, $myContents: String) {
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
    const result = await 나의함수({
      variables: {
        myWriter: "aa",
        myTitle: "aa",
        myContents: "aa",
      },
    });

    console.log(result);
  };

  return <button onClick={onClickSubmit}>GraphQL 동기 요청하기</button>;
}
