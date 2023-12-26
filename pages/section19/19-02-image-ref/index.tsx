import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
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

  return (
    <div>
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
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
