import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function LibraryModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={showModal}>모델창 열기</button>
      <Modal
        title="모달 제목"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <span>비밀번호 입력</span>
        <input type="password" placeholder="비밀번호를 입력해주세요." />
      </Modal>
    </div>
  );
}
