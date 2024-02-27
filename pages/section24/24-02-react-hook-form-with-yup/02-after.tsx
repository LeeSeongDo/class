import { useMutation, gql } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./02-after.validation";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";}


interface IFormData {
  writer: string;
  title: string;
  contents: string;
  email: string;
  password: string;
}

export default function GraphqlPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(Schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  console.log("리렌더링..");

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      <div>
        작성자 : <input type="text" {...register("writer")} />
        {/* 에러가 발생하면 아래 div가 나타난다. */}
        <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
        제목 : <input type="text" {...register("title")} />
        {/* 에러가 발생하면 아래 div가 나타난다. */}
        <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
        내용 : <input type="text" {...register("contents")} />
        {/* 에러가 발생하면 아래 div가 나타난다. */}
        <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
        이메일 : <input type="email" {...register("email")} />
        <div style={{ color: "red" }}>{formState.errors.email?.message}</div>
        비밀번호 : <input type="password" {...register("password")} />
        <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      </div>
      <button
        style={{ backgroundColor: formState.isValid ? "yellow" : "" }}
        type="submit"
      >
        {" "}
        Graphql API 요청하기
      </button>
    </form>
  );
}
