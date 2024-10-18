import { DataSource } from "typeorm";
import { Board } from "./board.postgres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

console.log("백엔드 프로그램을 실행합니다");

console.log("여기서 api를 만들거예요");
// 1. api 독스 만들기
// const 나의API독스 = `#graphql
const typeDefs = `#graphql
  # 타입
  type MyBoard {
    number: Int!
    writer: String
    title: String
    contents: String
  }

  type Query {
    # 조회는 [] 안에
    fetchBoards: [MyBoard]
  }

  type Mutation {
    createBoard(writer: String, title: String, contents: String): String!
  }
`;

// 2. api 만들기
// const 나의API = {
const resolvers = {
  // 조회 api
  Query: {
    fetchBoards: () => {
      // 응답값
      return [
        { number: 1, writer: "철수", title: "안녕", contents: "hello" },
        // 더 많은 게시글 아래에 추가 가능
        // {}, {}, ...
      ];
    },
  },

  // 등록 api
  // 브라우저에서 받아온 값을 넣어줘야함.
  Mutation: {
    createBoard: (parent: any, args: any, context: any, info: any) => {
      console.log("빋은 작성자: ", args.writer);
      console.log("빋은 제목: ", args.title);
      console.log("빋은 내용: ", args.contents);
      // 요청이 들어온 거니까 return (응답) 필요
      return "게시글 등록 성공";
    },
  },
};

// 3. api docs와 api를 그룹핑한 apollo 서버 만들기
const server = new ApolloServer({
  // typeDefs: 나의API독스,
  // resolvers: 나의API,
  // short-hand-property에 의해 왼쪽 값과 이름을 동일하게 하면 아래와 같이 작성 가능
  typeDefs,
  resolvers,
});

console.log("여기서 DB를 접속하고, 테이블을 만들거예요");
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.38.113",
  port: 5024,
  username: "postgres",
  password: "postgres2022",
  // 이거 뭔데 설정해두면 error: database "test" does not exist 이거 나오냐
  // database: "test",
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
    startStandaloneServer(server, {
      listen: { port: 4000 },
    }).then(() => {
      console.log("gql 서버가 실행되었습니다!");
    });
  })
  //접속 실패 시
  .catch((error) => {
    console.log("DB접속에 실패했습니다");
    console.log("원인:", error);
  });

// 4. 최종 완성된 apollo 서버 실행시키기 (리스닝하기 === 대기하기)
