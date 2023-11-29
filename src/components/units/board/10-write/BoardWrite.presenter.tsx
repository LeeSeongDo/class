import { BlueButton, RedInput } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <div>
      <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
      <div>
        작성자 :{" "}
        <input
          type="text"
          onChange={props.onChangeWriter}
          defaultValue={props.data?.fetchBoard.writer}
        />
        제목 :{" "}
        <input
          type="text"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        내용 :{" "}
        <RedInput
          type="text"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
      </div>
      <BlueButton
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </BlueButton>
    </div>
  );
}
