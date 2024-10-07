import { FetchBoardQuery } from "@/commons/graphql/graphql";

export interface IBoardsWriteProps {
  isEdit: boolean;
  data?: FetchBoardQuery; // 백엔드에서 어떤 data 주는지 하나하나 입력 => 하지만, 이미 입력된 타입 다운받을 예정
}

export interface IMyVariables {
  myNumber: number;
  myWriter?: string;
  myTitle?: string;
  myContents?: string;
}
