// class Date {
//     qqq = 3;
//     getFullYear() {}
//     getMonth() {}
// }

// const date = new Date()
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);

class Monster {
  power = 50;

  attack() {
    console.log("공격합니다.");
  }
}

class SuperMonstr extends Monster {
  // 상속
  // extends 부모 클래스

  run() {
    console.log("도망가자.");
  }

  // 오버라이딩 => 기존 부모 클래스에 있는 함수를 다시 재정의 하는 것을 "오버라이딩"이라 한다.
  attack() {
    console.log("슈퍼 몬스터");
  }
}

const Monster2 = new Monster();
Monster2.power = 1000;
