import { server } from "./src/commons/mock/index";

// 테스트하기전에 서버를 켜줘.
beforeAll(() => server.listen());

// 끝나고 나면 서버를 꺼줘
afterAll(() => server.close());
