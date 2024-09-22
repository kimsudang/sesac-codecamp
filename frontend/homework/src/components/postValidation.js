// 변수 선언
const owner = document.getElementById("postOwnerVaild");

// 작성자 검증 함수
export const postOwnerValid = (event) => {
  owner.innerText = "필수 입력 사항입니다.";
  owner.style.display = "block";
  owner.style.cssText =
    "color: var(--red, #F66A6A); font-size: 1.6rem; font-weight: 500; font-style: normal; line-height: 2.4rem";
};

// 비밀번호 검증 함수
export const postPasswordVaild = () => {};

// 제목 검증 함수
export const postTitleVaild = () => {};

// 내용 검증 함수
export const postContentVaild = () => {};
