import { useMutation, gql } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function GraphqlPage(): JSX.Element {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  console.log("리렌더링..");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        작성자 : <input type="text" {...register("writer")} />
        제목 : <input type="text" {...register("title")} />
        내용 : <input type="text" {...register("contents")} />
      </div>
      <button type="submit"> Graphql API 요청하기</button>
    </form>
  );
}
