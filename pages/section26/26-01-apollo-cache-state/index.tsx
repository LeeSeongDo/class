// 05-01-routing 페이지
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generate/types";
import { useState } from "react";
import { useMutation } from "@apollo/client";


const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const graphqlTest = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function StaticRoutingPage2() {
  const { data } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);


  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickSubmit = async () => {
    const result = await uploadFile({
      variables: {
        createBoardInput: {
          writer,
          password: "1234",
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };
  return (
    <div>
      {data?.fetchBoards.map((dd) => (
        <div key={dd?._id}>
          <span style={{ margin: "10px" }}>{dd?.title}</span>
          <span style={{ margin: "10px" }}>{dd?.writer}</span>
        </div>
      ))}
      <button>등록하기</button>
    </div>
  );
}
