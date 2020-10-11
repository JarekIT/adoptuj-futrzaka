import styled, { StyledComponent } from "styled-components";

export const ButtonAnonymousLogin: StyledComponent<
  "button",
  any,
  {},
  never
> = styled.button`
  direction: ltr;
  font-weight: 500;
  height: auto;
  line-height: normal;
  max-width: 220px;
  min-height: 40px;
  padding: 8px 16px;
  width: 100%;
  background-color: #ffffff;
  color: #757575;
  font-size: 14px;
  padding-left: 16px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  cursor: pointer;
  border: 0px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;
