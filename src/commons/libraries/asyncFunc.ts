import type { ChangeEvent,FormEvent } from "react";

export const wrapAsync = (asyncFunc: (event: ChangeEvent<HTMLInputElement>) => Promise<void>) => (event: ChangeEvent<HTMLInputElement>) => {
  void asyncFunc(event);
};

export const wrapFormAsync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본적인 기능을 막아주는 기능입니다.
    void asyncFunc();
  };
