"use client";

import { useBoardsWrite } from "./hook";
import { IBoardsWriteProps } from "./types";

export default function BoardsWrite(props: IBoardsWriteProps) {
  const { onChangeWriter, onChangeTitle, onChangeContents, onClickSubmit, onClickUpdate } = useBoardsWrite();
  return (
    <>
      <input type="text" onChange={onChangeWriter} defaultValue={props.data?.fetchBoard?.writer ?? ""} /> <br />
      <input type="text" onChange={onChangeTitle} defaultValue={props.data?.fetchBoard?.title ?? ""} /> <br />
      <input type="text" onChange={onChangeContents} defaultValue={props.data?.fetchBoard?.contents ?? ""} /> <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>{props.isEdit ? "수정" : "등록"}</button>
    </>
  );
}
