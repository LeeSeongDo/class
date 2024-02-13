import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite(props) {
  return <BoardWriteUI isEdit={props.isEdit} />;
}
