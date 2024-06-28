import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
// import {
//   IMutation,
//   IMutationUploadFileArgs,
// } from "../../../src/commons/types/generate/types";
import { createUploadLink } from "apollo-upload-client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage():JSX.Element {
  //   const [uploadFile] = useMutation<
  //     Pick<IMutation, "uploadFile">,
  //     IMutationUploadFileArgs
  //   >(UPLOAD_FILE);

  const [imageUrl, setImageUrl] = useState("");

//   const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file === undefined) return;
    console.log(file);
    
    // 1. 임시URL 생성 => (가짜URL - 내 브라우저에서만 접근 가능)
    const result = URL.createObjectURL(file);
    console.log(result);
    
    // 2. 임시URL 생성 => (진짜URL - 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file);
    // file을 다 읽으면 결과를 불러와줘.
    fileReader.onload = (event) => 
        console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유: event.target은 태그많을 가르키지 않음
        
        if(typeof event.target?.result === "string")
        setImageUrl(event.target?.result)
    }
  

  return (
    <div>
      <input type="file" onChange={wrapAsync(onChangeFile)} />
      <img src={imageUrl} alt="123" />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
    </div>
  );

}