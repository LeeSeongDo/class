export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

type aaa = Partial<IProfile>;
type bbb = Required<IProfile>;
type ccc = Pick<IProfile, "name" | "age">;
type ddd = Omit<IProfile, "school">;
type eee = "철수" | "영희" | "훈이"; // Union 타입
let child1: eee = "철수"; // 철수 영희 훈이만 가능
let child2: string = "사과"; // 철수, 영희, 바나나 등 다 됨
