import { useMutation, gql } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./02-after.validation";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";

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
        작성자 : <Input01 type="text" register={register("writer")} />
        {/* 에러가 발생하면 아래 div가 나타난다. */}
        <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
        제목 : <Input01 type="text" register={register("title")} />
        {/* 에러가 발생하면 아래 div가 나타난다. */}
        <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
        내용 : <Input01 type="text" register={register("contents")} />
        {/* 에러가 발생하면 아래 div가 나타난다. */}
        <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
        이메일 : <Input01 type="email" register={register("email")} />
        <div style={{ color: "red" }}>{formState.errors.email?.message}</div>
        비밀번호 : <Input01 type="password" register={register("password")} />
        <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      </div>
      <Button01
        title="Graphql API 등록하기"
        isActive={formState.isValid}
      ></Button01>
    </form>
  );
}
