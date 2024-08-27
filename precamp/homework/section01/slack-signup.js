// 가입 시 프로필 추가
// 프로필 클릭 시 저장된 배열에서 값 불러오기(도움 받음 -> 객체랑 배열 사용하는 기능)
const user = [];

function newProfileCreate() {
  // 날짜
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const todayDate = `${year}-${month}-${day}`;

  // 전화번호
  const phoneNumber = document.getElementById("info-phone").value;
  let hiddenPhoneNumber = "";
  if (phoneNumber !== "") {
    const shortNumber = phoneNumber.split("-");
    const firstNumber = shortNumber[0];
    const lastNumber = shortNumber[shortNumber.length - 1];
    const hiddenNumber = "****";
    hiddenPhoneNumber = firstNumber + "-" + hiddenNumber + "-" + lastNumber;
  }

  // 성별 가져오기
  let option1 = document.getElementById("woman");
  let option2 = document.getElementById("man");

  let selected;

  if (option1.checked) {
    selected = option1.value;
  } else if (option2.checked) {
    selected = option2.value;
  } else {
    selected = "남성";
  }

  const gender = selected;

  // 배열과 사용자 객체
  const name = document.getElementById("info-name").value;
  console.log(name);
  const email = document.getElementById("info-email").value;
  const password = document.getElementById("info-password").value;
  const introduce = document.getElementById("info-intro").value;

  const newProfile = {
    name: name,
    email: email,
    password: password,
    gender: gender,
    phone: hiddenPhoneNumber,
    agree: "Y",
    introduce: introduce,
    date: todayDate,
  };

  user.push(newProfile);
  console.log(user);

  if (user.length === 0) {
    document.getElementById("student-list-open").innerHTML =
      "<p></p><p></p><button><img />가입하기</button>";
  } else {
    document.getElementById(
      "student-list-open"
    ).innerHTML = `<button onclick="showInfomation()"><img src="./icon/프로필 이미지.png"/>수강생1</button>`;
  }

  alert(`회원가입을 축하합니다.
(가입일시: ${todayDate})`);
}

function showInfomation() {
  alert(`
이름: ${user[0].name}
이메일: ${user[0].email}
비밀번호: ${user[0].password}
성별: ${user[0].gender}
전화번호: ${user[0].phone}
동의여부: Y
자기소개: ${user[0].introduce}
(가입일시: ${user[0].date})
  `);
}

// 인증번호 요청 -> 인증번호 및 타이머
let timerFun;

function authButton() {
  clearInterval(timerFun);
  const randomAuthNum = String(Math.floor(Math.random() * 1000000)).padStart(
    6,
    "0"
  );
  document.getElementById("auth-num").innerText = randomAuthNum;

  document.getElementById("agree").style = "background-color: #491449";

  document.getElementById("auth-time").innerText = "3:00";

  let time = 179;
  timerFun = setInterval(function () {
    const min = String(Math.floor(time / 60)).padStart(1, "0");
    const sec = String(time % 60).padStart(2, "0");

    if (min === "0" && sec === "00") {
      clearInterval(timerFun);
      document.getElementById("agree").disabled = true;
      document.getElementById("agree").style = "background-color: #c7c7c7";
    }
    document.getElementById("auth-time").innerText = `${min}:${sec}`;
    time--;
  }, 1000);
}

// 인증 완료
function authCheckButton() {
  document.getElementById("agree").disabled = true;
  document.getElementById("agree").innerText = "인증완료";
  document.getElementById("agree").style = "background-color: #c7c7c7";
  clearInterval(timerFun);
  document.getElementById("auth-time").innerText = "";
}
