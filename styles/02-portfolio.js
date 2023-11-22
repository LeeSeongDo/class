import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 1647px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const DetailedPageTopArea = styled.div`
  // 상단 부분에 대한 영역입니다. (유저 정보, 작성날짜, 아이콘)
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

export const UserInfoArea = styled.div`
  width: 200px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const UserProfileImage = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 10px;
`;

export const DetailedPageIconArea = styled.div`
  display: flex;
  width: 90px;
  align-items: center;
  justify-content: space-between;
`;

export const DetailedIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const DetailedPageTitle = styled.h1`
  font-size: 36px;
  line-height: 100px;
  font-weight: 700;
`;

export const ButtonBox = styled.div`
  width: 150px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CircleButton = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 10px gray;
  border-radius: 100%;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  background-color: transparent;
  :first-child {
    color: orange;
  }
  :nth-child(2) {
    color: lightgray;
  }
`;
