export default function TestOne() {
  let aaa = "안녕하세요.";
  let ccc: number = 123;
  let ddd: boolean = false;
  let ggg: number[] = [1, 2, 3, 4, 5, 6];
  let hhh = ["철수", "영희", 10];

  interface Info {
    name: string;
    age: number;
    school: string;
  }

  const profile: Info = {
    name: "철수",
    age: 8,
    school: "다람쥐 초등학교",
  };

  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }

  const result = add(1000, 2000, "원");

  return <></>;
}
