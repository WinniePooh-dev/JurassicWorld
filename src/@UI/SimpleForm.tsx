import {Box} from '@material-ui/core';
import React, {ReactNode} from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  width: number | string;
  onSubmit: () => void;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 15px;
`;

const StyledFieldList = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const SimpleForm = ({children, onSubmit, ...props}: Props): JSX.Element => {
  const {width, ...rest} = props;
  return (
    <StyledForm {...rest} onSubmit={onSubmit}>
      <StyledFieldList width={width}>{children}</StyledFieldList>
    </StyledForm>
  );
};

export default SimpleForm;
