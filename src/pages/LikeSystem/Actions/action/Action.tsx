import React from "react";

import { Button, Img } from "../Actions.css";

export interface ActionProps {
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  src: string;
  alt: string;
}

const Action: React.FC<ActionProps> = ({ handleClick, src, alt }) => {
  return (
    <Button onClick={handleClick}>
      <Img src={src} alt={alt} />
    </Button>
  );
};

export default React.memo(Action);
