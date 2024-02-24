// 1. 함수를 리턴하는 함수
function aaa() {
  const apple = 20;
  return function (banana) {
    const banana = 10;
    console.log(banana, apple);
  };
}

aaa()();

// 2. 함수를 리턴하는 함수 - 인자
function ccc(apple) {
  return function (banana) {
    console.log(banana, apple);
  };
}

ccc(10)(20);

// 2-2. 함수를 리턴하는 함수 - 인자 (function 생략 가능)
function ddd(apple) {
  return (banana) => {
    console.log(banana, apple);
  };
}

ddd(10)(20);

// 2-3. 함수를 리턴하는 함수 - 인자 (function 생략 가능) (return 생략 가능)
const eee = (apple) => (banana) => {
  console.log(banana, apple);
};

eee(10)(20);

// 3. 만약 인자가 여러개인 경우에는?
const fff = (apple) => (banana) => (orange) => (tomato) => {
  console.log(banana, apple, orange, tomato);
};

eee(10)(20)(30)(40);
