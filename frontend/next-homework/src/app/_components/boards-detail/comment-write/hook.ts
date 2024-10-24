"use client";

import { useMutation } from "@apollo/client";
import { useParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { CreateBoardCommentDocument } from "@/commons/graphql/graphql";
import { FETCH_COMMENTS } from "../comment-list/queries";

const useCommentWrite = () => {
  const param = useParams();
  const [createBoardComment] = useMutation(CreateBoardCommentDocument);

  const [isVaild, setIsVaild] = useState(false);
  const [buttonActiveStyle, setButtonActiveStyle] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [writerVaild, setwriterVaild] = useState("");
  const [passwordVaild, setPasswordVaild] = useState("");
  const [contentsVaild, setContentsVaild] = useState("");

  const [rank, setRank] = useState(3);

  const onChangewriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value && password && contents) {
      setIsVaild(true);
      setButtonActiveStyle(true);
    } else {
      setButtonActiveStyle(false);
      setwriterVaild("필수입력 사항입니다.");
      setIsVaild(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (writer && event.target.value && contents) {
      setIsVaild(true);
      setButtonActiveStyle(true);
    } else {
      setButtonActiveStyle(false);
      setPasswordVaild("필수입력 사항입니다.");
      setIsVaild(false);
    }
  };

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (writer && password && event.target.value) {
      setIsVaild(true);
      setButtonActiveStyle(true);
    } else {
      setButtonActiveStyle(false);
      setContentsVaild("필수입력 사항입니다.");
      setIsVaild(false);
    }
  };

  const onChangeRank = (value: number) => {
    setRank(value);
  };

  const onClickSubmitComment = async () => {
    try {
      if (isVaild && writer && password && contents) {
        const result = await createBoardComment({
          variables: {
            boardId: String(param.boardId),
            createBoardCommentInput: {
              writer: writer,
              password: password,
              contents: contents,
              rating: rank,
            },
          },
          refetchQueries: [{ query: FETCH_COMMENTS }],
        });

        console.log(result);
        alert("댓글 등록이 완료 되었습니다.");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert(`에러가 발생했습니다. 다시 시도하여 주세요. \n error: ${error}`);
    } finally {
    }
  };

  return {
    writer,
    password,
    contents,
    buttonActiveStyle,
    writerVaild,
    passwordVaild,
    contentsVaild,
    rank,
    onChangeRank,
    onChangewriter,
    onChangePassword,
    onChangeComment,
    onClickSubmitComment,
  };
};

export default useCommentWrite;
