import styled from "@emotion/styled";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 50px;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const RowBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const RowBox2 = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 20px);
`;
export const LongColumnBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FontStyle2 = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  line-height: 23.68px;
`;

export const FontStyle3 = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  line-height: 23.68px;
  margin: 0px 10px;
`;

export const SmallInputStyle = styled.input`
  padding: 10px;
  width: 57px;
  height: 32px;
  border: 1px solid #bdbdbd;
  margin-right: 20px;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c4c4c4;
  }
`;

export const MediumInputStyle = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: calc(100% - 20px);
  height: 32px;
  border: 1px solid #bdbdbd;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c4c4c4;
  }
`;

export const BigInputStyle = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: calc(100% - 20px);
  height: 460px;
  border: 1px solid #bdbdbd;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c4c4c4;
  }
`;
export const SearchButton = styled.button`
  padding: 10px;
  width: 124px;
  height: 54px;
  background-color: black;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;

export const RadioButton = styled.input`
  width: 24px;
  height: 24px;
  &::checked {
    background-color: yellow;
  }
`;

export const FinalButton = styled.button`
  width: 179px;
  height: 52px;
  margin-bottom: 100px;
  color: black;
  background-color: #ffd600;
  border: none;
  font-weight: 900;
`;
