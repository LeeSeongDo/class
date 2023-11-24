import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  background-color: royalblue;
  color: ${(props) => (props.isActive === true ? props.mycolor : "black")};
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border: none;
`;
