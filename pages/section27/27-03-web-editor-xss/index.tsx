// 

import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import "react-quill/dist/quill.snow.css";
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { wrapFormAsync } from '../../../src/commons/libraries/asyncFunc';

// 캐시에 저장되는 데이터와 요청 후 받아오는 값이 일치되어야 합니다.
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
const ReactQuill = dynamic(async () => await import("react-quill"), { ssr: false})

export default function WebEditorPage(): JSX.Element {
    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD);

    const {register, setValue, trigger, handleSubmit} = useForm({
        mode: "onChange"
    })

    const onChangeContents = (value: string): void => {
        console.log(value);

        setValue("contents", value === "<p><br/></p>" ? "" : value)
        
        // onChange 됐으니까 에러검증 같은것들 해달라고 react-hook-form에 알려주는 기능!
        void trigger("contents");
    }
    
    const onClickSubmit = async (data: any): Promise<void> => {
        const result = await createBoard({
            variables: {
              createBoardInput: {
                writer: data.writer,
                password: data.password,
                title: data.title,
                contents: data.contents,
              },
            },
        });

        const {Modal} = await import("antd");
        Modal.success({content: "게시글 등록에 성공하였습니다!!"});
        const boardId = result.data.createBoard._id;
        void router.push(`/section27/27-03-web-editor-xss-detail/${boardId}`)
    };

    return (
        <div>
            <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
                작성자 : <input type="text" {...register("writer")}/> <br />
                비밀번호 : <input type="password" {...register("password")}/> <br />
                제목 : <input type="text" {...register("title")}/> <br />
                내용 : <ReactQuill onChange={onChangeContents} />
                <button>등록하기</button>
            </form>
        </div>
    )
}