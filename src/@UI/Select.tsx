import React, {Fragment} from 'react';
import {FieldRenderProps} from 'react-final-form';
import styled, {keyframes} from 'styled-components';
import ReactSelect from 'react-select';
import {FieldProps, StyledFormTextHelper} from '.';
import {Colors} from '../GlobalStyle';
import {lighten} from 'polished';

export type Option = {
  value: string;
  label: string;
};

interface SelectProps
  extends FieldProps,
    FieldRenderProps<string | Option | string, HTMLInputElement> {
  options?: Option[];
}

export const slider = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-3rem);
  }
  75% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DefaultSelectField = styled(ReactSelect)<SelectProps>`
  .Select__control {
    padding: 7px 10px;
    border: 1px solid transparent;
    background-color: ${props => props.background || Colors.secondColor};
    border-radius: 14px;
    font-family: Roboto, Oxygen, Ubuntu, cursive;
    text-overflow: ellipsis;
    outline: none;
    z-index: 10;

    .Select__single-value {
      color: ${props => props.color || lighten(0.2, Colors.textColor)};
    }

    .Select__indicator {
      & svg {
        color: #999999;
        transform: rotate(0);
        transition: 0.1s;
      }
    }

    &:hover {
      border-color: #a1a1a1;

      .Select__single-value {
        color: ${props => props.color || '#999999'};
      }
    }

    &:focus,
    &:active {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }

  .Select__control--is-focused {
    border: none;
    outline: none;
    outline-offset: 0;
    box-shadow: none;
  }

  .Select__control--menu-is-open {
    .Select__indicator {
      & svg {
        color: ${props => props.color || Colors.mainColor};
        transform: rotate(-180deg);
        transition: 0.1s;
      }
    }
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    padding: 0;
    margin: -14px 0 0;
    color: #3c3d3e;
    background: ${Colors.background};
    overflow: hidden;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);
    border-radius: 0 0 14px 14px;
    animation: ${slider} 0.2s ease-in;

    .Select__menu-list {
      padding: 0;
      margin: 14px 0 0;
      background-color: inherit;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);

      .Select__menu-notice {
        &.Select__menu-notice--no-options {
          padding: 15px 20px;
        }
      }

      .Select__option {
        padding: 10px 20px;
        font-size: 24px;
      }

      .Select__option--is-focused,
      .Select__option--is-selected {
        font-size: 24px;
        letter-spacing: 3px;
        color: ${Colors.background};
        background-color: ${Colors.mainColor};
      }
    }
  }
`;

const SelectField = (props: SelectProps): JSX.Element => {
  const {label, options} = props;

  return (
    <Fragment>
      <StyledFormTextHelper>{label}</StyledFormTextHelper>
      <DefaultSelectField
        name={props.input.name}
        value={props.input.value}
        onChange={props.input.onChange}
        options={options}
        classNamePrefix="Select"
      />
    </Fragment>
  );
};

export default SelectField;
