"use client";

import { useMutation, gql } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($myWriter: String, $myTitle: String, $myContents: String) {
    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
      _id
      number
      message
    }
  }
`;

const UPDATE_BOARD = gql`
  mutation updateBoard($myNumber: Int, $myWriter: String, $myTitle: String, $myContents: String) {
    updateBoard(number: $myNumber, writer: $myWriter, title: $myTitle, contents: $myContents) {
      _id
      number
      message
    }
  }
`;

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
      route.push(`/section09/09-04-boards-vaildation/${result.data.createBoard.number}`);
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
      route.push(`/section09/09-04-boards-vaildation/${params.number}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input type="text" onChange={onChangeWriter} defaultValue={props.data?.fetchBoard.writer} /> <br />
      <input type="text" onChange={onChangeTitle} defaultValue={props.data?.fetchBoard.title} /> <br />
      <input type="text" onChange={onChangeContents} defaultValue={props.data?.fetchBoard.contents} /> <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>{props.isEdit ? "수정" : "등록"}</button>
    </>
  );
}
