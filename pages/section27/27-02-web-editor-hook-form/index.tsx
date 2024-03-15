import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import "react-quill/dist/quill.snow.css";
// import {Modal} from "antd"

const ReactQuill = dynamic(async () => await import("react-quill"), { ssr: false})



export default function WebEditorPage(): JSX.Element {
    
    const {register, setValue, trigger} = useForm({
        mode: "onChange"
    })

    const onChangeContents = (value: string): void => {
        console.log(value);

        setValue("contents", value === "<p><br/></p>" ? "" : value)
        
        // onChange 됐으니까 에러검증 같은것들 해달라고 react-hook-form에 알려주는 기능!
        void trigger("contents");
    }
    
    const onClickSubmit = async (event): Promise<void> => {
        event.preventDefault();
        const {Modal} = await import("antd");
        Modal.success({content: "게시글 등록에 성공하였습니다!!"});
    };

    return (
        <div>
            <form onSubmit={onClickSubmit}>
                작성자 : <input type="text" {...register("writer")}/> <br />
                비밀번호 : <input type="password" {...register("password")}/> <br />
                제목 : <input type="text" {...register("title")}/> <br />
                내용 : <ReactQuill onChange={onChangeContents} />
                <button>등록하기</button>
            </form>
        </div>
    )
}