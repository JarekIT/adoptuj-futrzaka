import styled, { StyledComponent } from "styled-components";

export const AnimalStyle: StyledComponent<"div", any, {}, never> = styled.div``;

export const Photo: StyledComponent<"div", any, {}, never> = styled.div`
  overflow: hidden;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
`;

export const Img: StyledComponent<"img", any, {}, never> = styled.img`
  object-fit: cover;
  margin: auto;
  display: block;

  @media screen and (max-width: 540px) {
    width: 100vw;
  }

  @media screen and (min-width: 540px) {
    width: auto;
    height: 700px;
  }
`;

export const Description: StyledComponent<"div", any, {}, never> = styled.div`
  text-align: left;
  padding: 10px 20px 10px 20px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  background: rgba(256, 256, 256, 0.4);

  @media only screen and (orientation: portrait) {
    position: absolute;
    bottom: 80px;
    width: 100%;
  }
`;

export const NameAge: StyledComponent<"p", any, {}, never> = styled.p`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
  margin-top: 0;
`;

export const Info: StyledComponent<"p", any, {}, never> = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 15px;
`;
