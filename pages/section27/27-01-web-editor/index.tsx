import dynamic from 'next/dynamic';
import "react-quill/dist/quill.snow.css";
// import {Modal} from "antd"

const ReactQuill = dynamic(async () => await import("react-quill"), { ssr: false})



export default function WebEditorPage(): JSX.Element {
    
    const onChangeContents = (value: string): void => {
        console.log(value);
    }
    
    const onClickSubmit = async (event): Promise<void> => {
        event.preventDefault();
        const {Modal} = await import("antd");
        Modal.success({content: "게시글 등록에 성공하였습니다!!"});
    };

    return (
        <div>
            <form onSubmit={onClickSubmit}>
                작성자 : <input type="text"/> <br />
                비밀번호 : <input type="password"/> <br />
                제목 : <input type="text"/> <br />
                내용 : <ReactQuill onChange={onChangeContents}/>
                <button>등록하기</button>
            </form>
        </div>
    )
}