import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      <div>
        작성자 : <input type="text" onChange={props.onChangeWriter} />
        제목 : <input type="text" onChange={props.onChangeTitle} />
        내용 : <RedInput type="text" onChange={props.onChangeContents} />
      </div>
      <BlueButton onClick={props.onClickSubmit}>
        Graphql API 요청하기
      </BlueButton>
    </div>
  );
}
