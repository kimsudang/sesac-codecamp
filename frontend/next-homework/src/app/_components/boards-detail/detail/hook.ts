"use client";

import { FetchBoardDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const useBoardsDetail = () => {
  const params = useParams();

  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      boardId: String(params.boardId),
    },
  });

  console.log(data?.fetchBoard);

  const address =
    "(" +
    data?.fetchBoard.boardAddress?.zipcode +
    ") " +
    data?.fetchBoard.boardAddress?.address;

  const extractYouTubeID = (url) => {
    const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/;
    const match = url?.match(regex);
    return match ? match[1] : null;
  };

  const url = data?.fetchBoard.youtubeUrl;
  const videoID = extractYouTubeID(url);
  console.log(videoID); // ekr2nIex040

  return { params, data, address, videoID };
};

export default useBoardsDetail;
