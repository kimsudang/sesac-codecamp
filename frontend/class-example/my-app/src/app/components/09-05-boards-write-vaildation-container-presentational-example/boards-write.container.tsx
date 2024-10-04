"use client";

import { useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import BoardsWriteUI from "./boards-write.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./board-write.queries";

export default function BoardsWrite(props) {
  const route = useRouter();
  const params = useParams();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          myWriter: writer,
          myTitle: title,
          myContents: contents,
        },
      });
      console.log(result);

      alert("등록이 완료되었습니다.");
      route.push(
        `/section09/09-05-boards-vaildation-container-presentational-example/${result.data.createBoard.number}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onClickUpdate = async () => {
    const myVariables = {
      myNumber: Number(params.number),
    };

    if (writer) myVariables.myWriter = writer;
    if (title) myVariables.myTitle = title;
    if (contents) myVariables.myContents = contents;

    try {
      const result = await updateBoard({
        variables: myVariables,
      });
      console.log(result);

      alert("수정이 완료되었습니다.");
      route.push(`/section09/09-05-boards-vaildation-container-presentational-example/${params.number}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BoardsWriteUI
      작성자입력하는기능={onChangeWriter}
      제목입력하는기능={onChangeTitle}
      내용입력하는기능={onChangeContents}
      등록하는기능={onClickSubmit}
      수정하는기능={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
