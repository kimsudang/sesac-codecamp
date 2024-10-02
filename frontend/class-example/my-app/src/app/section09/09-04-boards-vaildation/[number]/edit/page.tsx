"use client";

import BoardsWrite from "@/app/components/09-04-boards-write-vaildation";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($mynumber: Int) {
    fetchBoard(number: $mynumber) {
      writer
      title
      contents
    }
  }
`;

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
