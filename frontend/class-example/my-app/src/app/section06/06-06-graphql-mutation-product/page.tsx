"use client";

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_PRODUCT);

  const [] = useState();

  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await 나의함수({
      // variables, 이게 달러 역할을 한다.
      variables: {
        seller: "수댕이",
        // 기본적으로 문자열로 들어감. useState로 숫자 넣을 때 유의할 것!
        createProductInput: { name: "당근", detail: "당~근당근당근당~근", price: 100000 },
      },
    });
    console.log(result);
  };

  // 한 줄일 때는 괄호() 필요 없음.
  return (
    <>
      <button onClick={onClickSubmit}>GraphQL 동기 요청하기</button>
    </>
  );
}
