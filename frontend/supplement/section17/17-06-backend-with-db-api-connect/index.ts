import { DataSource } from "typeorm";
import { Board } from "./board.postgres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

console.log("백엔드 프로그램을 실행합니다");

console.log("여기서 api를 만들거예요");
// 1. api 독스 만들기
// const 나의API독스 = `#graphql
const typeDefs = `#graphql
   input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  # 타입
  type MyBoard {
    id: Int!
    writer: String
    title: String
    contents: String
  }

  type Query {
    # 조회는 [] 안에
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용 (main-example 방식)
    # createBoard(writer: String, title: String, contents: String): String!

    # 실무용 (main-practice 방식)
    createBoard(createBoardInput: CreateBoardInput!): String!
  }
`;

// 2. api 만들기
// const 나의API = {
const resolvers = {
  // 조회 api
  Query: {
    fetchBoards: async () => {
      // 1. 모두 꺼내기
      const result = Board.find();
      return result;

      // 2. 하나만 꺼내기
      // const result = await Board.findOne({
      //   where: { number: 3 },
      // });
      // return result;
    },
  },

  // 등록 api
  // 브라우저에서 받아온 값을 넣어줘야함.
  // 콤마로 연결된 이유: 객체안에 함수가 키-값 구조로 들어가기 때문에 (,) 로 연결해줘야한다.
  // 객체 안에서는 (,)로 연결하니까 그거랑 같음
  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      // await가 없어서 등록하고 밖으로 빠짐 => 대기 필요함 await 넣어줌 =? 왜? 뮤테이션이라?
      await Board.insert({
        ...args.createBoardInput,

        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      console.log("빋은 작성자: ", args.writer);
      console.log("빋은 제목: ", args.title);
      console.log("빋은 내용: ", args.contents);
      // 요청이 들어온 거니까 return (응답) 필요
      return "게시글 등록 성공";
    },

    // 수정
    // updateBoard: async () => {
    //   // 3번 게시글 작성자를 영희로 변경
    //   // Board.update((조건), (하고싶은 것))

    //   await Board.update({ id: 3 }, { writer: "영희" });
    // },

    // 삭제
    // deleteBoard: () => {
    //   Board.delete({ id: 3 }); // 3번 게시글 삭제
    // 실무에선 삭제 하면 안되는 데이터도 존재(복구가 필요한) => 소프트 딜리트
    // 디비에 isDelete같은 값 만들고 해당 요소만 t/f로 관리해준다.
    // 아래와 같이 하면 수정 시 삭제 여부 판단 후 수정해야함 (null이 들어오는지 확인 후 들어오지 않는다면 수정 가능)
    // Board.update({ id: 3 }, { isDelete: true }); // 3번 게시글 삭제했다고 치자
    // Board.update({ id: 3 }, { deleteAt: new Date() }); // 삭제 시간을 기록해준다(삭제 시점 확인 가능) =. 시간까지 기록 가능

    // 아래와 같이 작성하면 알아서 확인하고 가져와준다
    // Board.softRemove(); // 내장 소프트 딜리트
    // },
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
  database: "test2",
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
