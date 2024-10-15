import { FetchBoardsQuery } from "@/commons/graphql/graphql";
import { useState } from "react";

interface ICommentItemProps {
  el: FetchBoardsQuery["fetchBoards"][0];
}

export default function CommentItem({ el }: ICommentItemProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div>
          <span style={{ marginRight: "10px" }}></span>
          <span>{el.title}</span>
          <span>{el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text" />
      )}
    </div>
  );
}
