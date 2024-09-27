"use client";

import { useMutation, gql } from "@apollo/client";

const 나의그래프큐엘세팅 = gql`
  mutation {
    createBoard(writer: "수댐", title: "수대엠", contents: "수댕이는 '당이당이'하고 울어요") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await 나의함수();
    console.log(result);
  };

  // 한 줄일 때는 괄호() 필요 없음.
  return <button onClick={onClickSubmit}>GraphQL 동기 요청하기</button>;
}
