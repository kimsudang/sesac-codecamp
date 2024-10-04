"use client";

import BoardsWrite from "@/app/components/09-07-boards-write-validation-hooks-refactoring-typescript";
import { FETCH_BOARD } from "@/app/components/09-07-boards-write-validation-hooks-refactoring-typescript/query";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

export default function BoardsEditPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      mynumber: Number(params.number),
    },
  });

  console.log(data);

  return <BoardsWrite isEdit={true} data={data} />;
}
