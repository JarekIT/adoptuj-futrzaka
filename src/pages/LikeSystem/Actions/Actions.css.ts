import styled, { StyledComponent } from "styled-components";

export const ActionsStyle: StyledComponent<"div", any, {}, never> = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  @media only screen and (orientation: portrait) {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;

export const Button: StyledComponent<"button", any, {}, never> = styled.button`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 12px;
  border: 0;
  border-radius: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  cursor: pointer;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);

  :nth-of-type(2) {
    width: 60px;
    height: 60px;
    padding: 15px;

    -webkit-animation: pulse 1.5s infinite;
    animation: pulse 1.5s infinite;

    @-webkit-keyframes pulse {
      0% {
        -webkit-box-shadow: 0 0 0 0 rgba(241, 201, 202, 0.4);
      }
      100% {
        -webkit-box-shadow: 0 0 0 35px rgba(241, 201, 202, 0);
      }
    }

    @keyframes pulse {
      0% {
        -moz-box-shadow: 0 0 0 0 rgba(241, 201, 202, 0.4);
        box-shadow: 0 0 0 0 rgba(241, 201, 202, 0.4);
      }
      100% {
        -moz-box-shadow: 0 0 35px 35px rgba(241, 201, 202, 0);
        box-shadow: 0 0 35px 35px rgba(241, 201, 202, 0);
      }
    }
  }
`;

export const Img: StyledComponent<"img", any, {}, never> = styled.img`
  width: 100%;
  height: auto;
`;
