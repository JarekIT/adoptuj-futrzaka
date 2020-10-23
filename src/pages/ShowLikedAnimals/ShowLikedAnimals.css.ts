import styled, { StyledComponent } from "styled-components";

export const Div: StyledComponent<"div", any, {}, never> = styled.div`
  padding: 10px;
  border-radius: 1px;
  background-color: white;
  border-top: 1px solid #eee;
`;
