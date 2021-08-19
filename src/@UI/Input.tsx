import {InputBase} from '@material-ui/core';
import {darken} from 'polished';
import React, {Fragment} from 'react';
import {FieldRenderProps} from 'react-final-form';
import styled, {css} from 'styled-components';
import {StyledFormTextError, StyledFormTextHelper, FieldProps} from '.';
import {Colors} from '../GlobalStyle';
import {getError} from '../lib/error';

export interface InputProps extends FieldProps, FieldRenderProps<string, HTMLInputElement> {}

export const StyledInputField = styled(InputBase)<InputProps>`
  input {
    padding: 15px 20px;
    border: 1px solid transparent;
    background-color: ${props => props.background || Colors.secondColor};
    border-radius: 14px;
    color: ${props => props.color || '#444444'};
    font-family: Roboto, Oxygen, Ubuntu, cursive;
    text-overflow: ellipsis;
    text-decoration: none;

    &::placeholder {
      text-overflow: ellipsis;
      color: ${props => props.color || '#999999'};
    }

    &:focus {
      border-color: ${props => props.color || darken(0.1, Colors.secondColor)};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: ${props => props.error && Colors.errorColor};
      -webkit-box-shadow: 0 0 0px 1000px ${props => props.background || Colors.secondColor} inset;
      transition: background-color 5000s ease-in-out 0s;
    }

    ${({error}) =>
      error &&
      css`
        border-color: ${Colors.errorColor};
        color: ${Colors.errorColor};
        text-decoration: none;

        &:focus {
          border-color: ${Colors.errorColor};
          color: ${Colors.errorColor};
        }
      `}
  }
`;

const InputField = (props: InputProps): JSX.Element => {
  const {label, placeholder, meta} = props;
  const error = getError(meta);
  return (
    <Fragment>
      <StyledFormTextHelper>{label}</StyledFormTextHelper>
      <StyledInputField
        name={props.input.name}
        value={props.input.value}
        onChange={props.input.onChange}
        {...props}
        error={!!error}
        placeholder={placeholder}
      />
      {error && <StyledFormTextError>{error}</StyledFormTextError>}
    </Fragment>
  );
};

export default InputField;
