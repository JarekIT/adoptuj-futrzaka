import styled, { StyledComponent } from "styled-components";

export const HeaderStyle: StyledComponent<"div", any, {}, never> = styled.div`
  background-color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const Button: StyledComponent<"button", any, {}, never> = styled.button`
  background-color: transparent;
  border: 0;
  width: 50px;
  cursor: pointer;
`;

export const Img: StyledComponent<"img", any, {}, never> = styled.img`
  width: 100%;
`;
