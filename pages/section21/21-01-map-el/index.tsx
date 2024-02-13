export default function MapElPage(): JSX.Element {
  ["철수", "영희", "훈이"].map((el, index) => {
    console.log("el : ", el);
    console.log("index : ", index);
  });

  // 2. 매개변수 이름 변경
  ["철수", "영희", "훈이"].map((kk, number) => {
    console.log("el : ", kk);
    console.log("index : ", number);
  });

  // 3. 함수 선언식 방법 이름 변경
  ["철수", "영희", "훈이"].forEach(function (kk, number) {
    console.log("el : ", kk);
    console.log("index : ", number);
  });

  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].map((index, el) => {
    console.log("el : ", index);
    console.log("index : ", el);
  });

  return <div></div>;
}
