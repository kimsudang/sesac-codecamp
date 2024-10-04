"use client";

import { FETCH_BOARD } from "@/app/components/09-05-boards-write-vaildation-container-presentational-example/board-write.queries";
import BoardsWrite from "@/app/components/09-05-boards-write-vaildation-container-presentational-example/boards-write.container";
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
