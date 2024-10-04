"use client";

import { FETCH_BOARD } from "@/app/components/09-06-boards-write-validation-hooks-refactoring/query";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BoardsDetailPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      mynumber: Number(params.number),
    },
  });

  console.log(data);

  return (
    <>
      <div>상세페이지 {params.number} 이동이 완료되었습니다.</div>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
      <Link href={`/section09/09-06-boards-vaildation-hooks-refactoring/${params.number}/edit`}>수정하러가기</Link>
    </>
  );
}
