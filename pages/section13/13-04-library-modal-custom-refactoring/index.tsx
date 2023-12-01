import React, { useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function LibraryModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const setModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data): void => {
    console.log(data);
    console.log(data?.address);
    setModal();
  };

  return (
    <div>
      <button onClick={setModal}>모델창 열기</button>

      {/* 1. 모달을 숨기는 방법.
      <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/*2. 모달을 삭제하는 방법 : ex:)신용카드 비밀번호 등  */}
      {isOpen && (
        <Modal open={true} onOk={setModal} onCancel={setModal}>
          <DaumPostcodeEmbed onComplete={setModal} />
        </Modal>
      )}
    </div>
  );
}
