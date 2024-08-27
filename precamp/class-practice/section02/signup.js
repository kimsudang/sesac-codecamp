function 회원가입축하() {
  const 이메일 = document.getElementById("이메일주소").value;
  const 이메일분리 = 이메일.split("@");

  const 이메일앞 = 이메일분리[0];
  const 이메일뒤 = 이메일분리[1];

  const 이메일암호화 = 이메일앞.slice(0, 4);
  const 이메일암호화별 = "****";

  const 최종이메일 = 이메일암호화 + 이메일암호화별 + "@" + 이메일뒤;
  alert(`회원가입을 축하합니다. 가입하신 이메일은 ${최종이메일}입니다.`);
}
