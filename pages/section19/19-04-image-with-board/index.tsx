import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { checkValidation } from "../../../src/commons/libraries/validationFile";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generate/types";
import { createUploadLink } from "apollo-upload-client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
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

export default function ImageUploadPage(): JSX.Element {
  //   const [uploadFile] = useMutation<
  //     Pick<IMutation, "uploadFile">,
  //     IMutationUploadFileArgs
  //   >(UPLOAD_FILE);
  const fileref = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const isValid = checkValidation(file);
      if (!isValid) return;

      const result = await uploadFile({ variables: { file } });
      console.log(result.data.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url ?? "");
    } catch (error) {
      console.log(error);
    }
  };

  const onClickImage = (): void => {
    fileref.current.click();
  };

  //복사한 내용들.
  const [Boards] = useMutation(graphqlTest);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    const result = await Boards({
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

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.currentTarget.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>): void => {
    setContents(e.target.value);
  };

  return (
    <div>
      <div>
        작성자 : <input type="text" onChange={onChangeWriter} />
        제목 : <input type="text" onChange={onChangeTitle} />
        내용 : <input type="text" onChange={onChangeContents} />
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          cursor: "pointer",
          backgroundColor: "royalblue",
          color: "white",
          borderRadius: "10px",
        }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileref}
        accept="image/jpeg, image/png"
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <button onClick={onClickSubmit}>Graphql API 요청하기</button>
    </div>
  );
}
