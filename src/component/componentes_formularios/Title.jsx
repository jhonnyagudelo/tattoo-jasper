import React from "react";
import { StyledTitle } from "./styles";
import { memo } from "react";
const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default memo(Title);
