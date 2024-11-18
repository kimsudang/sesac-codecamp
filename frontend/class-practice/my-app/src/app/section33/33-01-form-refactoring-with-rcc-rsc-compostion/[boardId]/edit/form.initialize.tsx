"use client"; // 클라이언트의 props로 넘겨주는 props들도 클라이언트여야 함

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { ISchema } from "./form.schema";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
    }
  }
`;

// useInitialize는 <Form />안에서 실행되어야 함.
export const useInitialize = ({ setValue, trigger }) => {
  const { boardId } = useParams();
  // 수정하기라 fetchboard해줌
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId },
  });

  // 1. 수정하기 초기값 설정
  useEffect(() => {
    if (!data) return;

    const { title, contents } = data.fetchBoard;
    setValue("title", title);
    setValue("contents", contents);

    // 수정사항 없이도 요청은 보낼 수 있도록 trigger 사용
    trigger();
  }, [data]);

  // 2. 수정완료 기능
  const onSubmit = async (data: ISchema) => {
    console.log(data);
  };

  return {
    onSubmit,
  };
};
