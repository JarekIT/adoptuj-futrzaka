import styled, { StyledComponent } from "styled-components";

export const FilterImg: StyledComponent<"img", any, {}, never> = styled.img`
  width: 36px;
  height: 36px;
  top: 100px;

  @media screen and (max-width: 540px) {
    position: fixed;
    right: 45px;
  }

  @media screen and (min-width: 540px) {
    position: relative;
    left: 400px;
  }
`;
