import React from "react";

import { Wrapper, Content, CloseIcon } from "./Modal.css";

type ClickType = React.MouseEvent<HTMLElement>;

interface IModal {
  children: JSX.Element;
  handleChangeFiltersView: (e: ClickType) => void;
}

const Modal: React.FC<IModal> = ({ children, handleChangeFiltersView }) => {
  const handleClickOnModal: (e: ClickType) => void = (e: ClickType) => {
    e.stopPropagation();
  };

  return (
    <Wrapper onClick={handleChangeFiltersView}>
      <Content onClick={handleClickOnModal}>
        <CloseIcon onClick={handleChangeFiltersView}>&times;</CloseIcon>
        {children}
      </Content>
    </Wrapper>
  );
};

export default React.memo(Modal);
