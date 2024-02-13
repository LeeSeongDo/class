import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/stores";

export default function BoardWriteUI(props) {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <div>{isEdit === true ? "수정하기" : "작성하기"}</div>;
}
