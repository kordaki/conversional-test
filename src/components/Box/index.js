import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  border: 1px solid #333;
  padding: 1em;
`;

const Box = (props) => {
  const { name, borderSize, children } = props;
  return (
    <StyledSection name={name} style={{ borderWidth: borderSize }}>
      {children}
    </StyledSection>
  );
};

export default React.memo(Box);
