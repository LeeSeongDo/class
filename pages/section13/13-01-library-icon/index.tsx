import { StepBackwardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(StepBackwardOutlined)`
  width: 50px;
  height: 50px;
  color: royalblue;
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => {
    alert(event.currentTarget.id);
  };

  return (
    <>
      <div id="삭제할 게시글 아이디" onClick={onClickDelete}>
        <MyIcon />;
      </div>

      <div>;;</div>
    </>
  );
}
