import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function LibraryModalPage() {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "게시글 등록에 성공했습니다.",
    });
  };

  const onClickFailed = (): void => {
    Modal.error({
      content: "비밀번호가 틀렸습니다.",
    });
  };

  return (
    <div>
      <button onClick={onClickSuccess}>성공했을 때 </button>
      <button onClick={onClickFailed}>실패했을 때 </button>
    </div>
  );
}
