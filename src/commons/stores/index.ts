import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState", // 이게 변수명
  default: true, // 초기값
});
