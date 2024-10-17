import { DataSource } from "typeorm";
import { Board } from "./board.postgres";

console.log("백엔드 프로그램을 실행합니다");

console.log("여기서 api를 만들거예요");

console.log("여기서 DB를 접속하고, 테이블을 만들거예요");
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.38.113",
  port: 5024,
  username: "postgres",
  password: "postgres2022",
  database: "test",
  // 동기화
  synchronize: true,
  // orm이 만드는 db의 명령어 로그 확인
  logging: true,
  // 여기서 불러올 테이블 넣으면 됨
  entities: [Board],
});

// 접속을 초기화 한다
AppDataSource.initialize()
  // 접속 성공 시
  .then(() => {
    console.log("DB접속에 성공했습니다. 동기화 할게요");
  })
  //접속 실패 시
  .catch((error) => {
    console.log("원인", error);
  });
