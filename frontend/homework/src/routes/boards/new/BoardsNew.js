import { useState } from "react";
import "../../../styles/boards/new/BoardsNew.css";
import close from "../../../assets/icon/close.svg";
import { addressSearchButton, postCancelButton, postSubmitButton, addImageButton } from "../../../components/button.js";

const BoardsNew = () => {
  const [isVaild, setIsVaild] = useState(false);
  const [buttonActiveStyle, setButtonActiveStyle] = useState({});

  // 이벤트 받아올 변수
  const [owner, setOwner] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 경고 메시지 변수
  const [ownerVaild, setOwnerVaild] = useState("");
  const [passwordVaild, setPasswordVaild] = useState("");
  const [titleVaild, setTitleVaild] = useState("");
  const [contentVaild, setContentVaild] = useState("");

  const onChangeOwner = (event) => {
    setOwner(event.target.value);

    if (event.target.value && password && title && content) {
      setIsVaild(true);
      setButtonActiveStyle({ backgroundColor: "var(--n-main, #2974e5)" });
    } else {
      setButtonActiveStyle({ backgroundColor: "var(--gray-300, #c7c7c7)" });
      setOwnerVaild("필수입력 사항입니다.");
      setIsVaild(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);

    if (owner && event.target.value && title && content) {
      setIsVaild(true);
      setButtonActiveStyle({ backgroundColor: "var(--n-main, #2974e5)" });
    } else {
      setButtonActiveStyle({ backgroundColor: "var(--gray-300, #c7c7c7)" });
      setPasswordVaild("필수입력 사항입니다.");
      setIsVaild(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);

    if (owner && password && event.target.value && content) {
      setIsVaild(true);
      setButtonActiveStyle({ backgroundColor: "var(--n-main, #2974e5)" });
    } else {
      setButtonActiveStyle({ backgroundColor: "var(--gray-300, #c7c7c7)" });
      setTitleVaild("필수입력 사항입니다.");
      setIsVaild(false);
    }
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);

    if (owner && password && title && event.target.value) {
      setIsVaild(true);
      setButtonActiveStyle({ backgroundColor: "var(--n-main, #2974e5)" });
    } else {
      setButtonActiveStyle({ backgroundColor: "var(--gray-300, #c7c7c7)" });
      setContentVaild("필수입력 사항입니다.");
      setIsVaild(false);
    }
  };

  const onClickPostVaildation = () => {
    if (isVaild && owner && password && title && content) {
      alert("게시글 등록이 가능한 상태입니다.");
    } else {
      alert("필수항목에 빈값이 존재합니다.");
    }
  };

  return (
    <div class="uploadPostPage">
      <div class="menuTitle">
        <p>게시글 등록하기</p>
        <img src={close} alt="close" />
      </div>
      <div class="postContainer">
        {/* 작성자, 비번 */}
        <div class="titleContainer">
          <div class="inputContainer">
            <div class="labelTitle">
              <p class="label">작성자</p>
              <p class="important">*</p>
            </div>
            <input
              id="postOwner"
              class="infoInput"
              type="text"
              placeholder="작성자 명을 입력해 주세요."
              onChange={onChangeOwner}
            />
            <p
              id="postOwnerVaild"
              class="postVaildation"
              style={{
                display: !owner ? "block" : "none",
                color: "var(--red, #F66A6A)",
                fontSize: "1.6rem",
                fontWeight: "500",
                lineHeight: "2.4rem",
              }}
            >
              {ownerVaild}
            </p>
          </div>
          <div class="inputContainer">
            <div class="labelTitle">
              <p class="label">비밀번호</p>
              <p class="important">*</p>
            </div>
            <input
              id="postPassword"
              class="infoInput"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              onChange={onChangePassword}
            />
            <p
              id="postPasswordVaild"
              class="postVaildation"
              style={{
                display: !password ? "block" : "none",
                color: "var(--red, #F66A6A)",
                fontSize: "1.6rem",
                fontWeight: "500",
                lineHeight: "2.4rem",
              }}
            >
              {passwordVaild}
            </p>
          </div>
        </div>
        <hr />
        {/* 제목 */}
        <div class="inputContainer">
          <div class="labelTitle">
            <p class="label">제목</p>
            <p class="important">*</p>
          </div>
          <input
            id="postTitle"
            class="infoInput"
            type="text"
            placeholder="제목을 입력해 주세요."
            onChange={onChangeTitle}
          />
          <p
            id="postTitleVaild"
            class="postVaildation"
            style={{
              display: !title ? "block" : "none",
              color: "var(--red, #F66A6A)",
              fontSize: "1.6rem",
              fontWeight: "500",
              lineHeight: "2.4rem",
            }}
          >
            {titleVaild}
          </p>
        </div>
        <hr />
        {/* 내용 */}
        <div class="inputContainer">
          <div class="labelTitle">
            <p class="label">내용</p>
            <p class="important">*</p>
          </div>
          <textarea
            id="postContent"
            class="infoInputContent"
            type="text"
            placeholder="내용을 입력해 주세요."
            onChange={onChangeContent}
          ></textarea>
          <p
            id="postContentVaild"
            class="postVaildation"
            style={{
              display: !content ? "block" : "none",
              color: "var(--red, #F66A6A)",
              fontSize: "1.6rem",
              fontWeight: "500",
              lineHeight: "2.4rem",
            }}
          >
            {contentVaild}
          </p>
        </div>
        {/* 주소 */}
        <div class="inputContainer addressInput">
          <p class="label">주소</p>
          <div class="addressMail">
            <input class="infoInputAddress" type="text" placeholder="01234" />
            {addressSearchButton()}
          </div>
          <input class="infoInput" type="text" placeholder="주소를 입력해 주세요." />
          <input class="infoInput" type="text" placeholder="상세주소" />
        </div>
        <hr />
        {/* 유튜브 링크 */}
        <div class="inputContainer">
          <p class="label">유튜브 링크</p>
          <input class="infoInput" type="text" placeholder="링크를 입력해 주세요." />
        </div>
        <hr />
        {/* 사진 첨부 */}
        <div class="postUploadeImg">
          <p class="label">사진 첨부</p>
          <div class="postUploadImage">
            {addImageButton()}
            {addImageButton()}
            {addImageButton()}
          </div>
        </div>
        <div class="postButtonGroup">
          {postCancelButton()}
          {postSubmitButton({ onClick: onClickPostVaildation }, buttonActiveStyle)}
        </div>
      </div>
    </div>
  );
};

export default BoardsNew;
