import dynamic from 'next/dynamic';
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), { ssr: false})

export default function WebEditorPage(): JSX.Element {
    
    const onChangeContents = (): void => {
        console.log("나는 에디터~");
    }
    
    return (
        <div>
            <form>
                작성자 : <input type="text"/> <br />
                비밀번호 : <input type="password"/> <br />
                제목 : <input type="text"/> <br />
                내용 : <ReactQuill onChange={onChangeContents}/>
                <button>등록하기</button>
            </form>
        </div>
    )
}