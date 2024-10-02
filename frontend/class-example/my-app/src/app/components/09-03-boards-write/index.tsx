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
  mutation updateBoard($mynumber: Int, $myWriter: String, $myTitle: String, $myContents: String) {
    updateBoard(number: $mynumber, writer: $myWriter, title: $myTitle, contents: $myContents) {
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
      route.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickUpdate = async () => {
    try {
      const result = await updateBoard({
        variables: {
          mynumber: Number(params.number),
          myWriter: writer,
          myTitle: title,
          myContents: contents,
        },
      });
      console.log(result);

      alert("수정이 완료되었습니다.");
      route.push(`/section09/09-03-boards/${params.number}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input type="text" onChange={onChangeWriter} /> <br />
      <input type="text" onChange={onChangeTitle} /> <br />
      <input type="text" onChange={onChangeContents} /> <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>{props.isEdit ? "수정" : "등록"}</button>
    </>
  );
}
