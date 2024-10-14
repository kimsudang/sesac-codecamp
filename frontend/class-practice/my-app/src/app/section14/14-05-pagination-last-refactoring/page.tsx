"use client";

import List from "@/app/components/14-05-pagination-last-refactoring/list";
import Pagination from "@/app/components/14-05-pagination-last-refactoring/pagination";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./queries";

const StaticRoutingMovedPage = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  console.log(data);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  return (
    <div>
      <List data={data} />
      <br />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
};

export default StaticRoutingMovedPage;
