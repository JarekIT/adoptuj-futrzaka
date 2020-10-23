import styled, { StyledComponent } from "styled-components";

export const Div: StyledComponent<"div", any, {}, never> = styled.div`
  display: inline-block;
  margin-top: 10px;

  @media screen and (max-width: 540px) {
    width: 40%;
  }

  @media screen and (min-width: 540px) {
    width: 16%;
  }
`;

export const Img: StyledComponent<"img", any, {}, never> = styled.img`
  border-radius: 5px;
  width: 140px;
  height: 100px;
  object-fit: cover;
  object-position: 50% 50%;
`;
