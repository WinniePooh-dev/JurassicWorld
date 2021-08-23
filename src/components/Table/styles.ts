import {lighten} from 'polished';
import styled from 'styled-components';
import {Colors} from '../../GlobalStyle';

export const Table = styled.table`
  width: calc(100% - 5em);
  border: 0px;
  margin: 0 auto;
  border-collapse: collapse;
  font-family: Roboto, Oxygen, Ubuntu, cursive;
  font-size: 2rem;

  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

export const Thead = styled.thead`
  font-weight: bold;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const TBody = styled.tbody``;

export const TR = styled.tr`
  text-overflow: ellipsis;
  &:hover {
    background: ${lighten(0.5, '#e8e9eb')};
  }

  @media screen and (max-width: 900px) {
    display: block;
    margin-bottom: 1rem;
    border-bottom: 2px solid #e8e9eb;
  }
`;

export const TH = styled.th`
  padding: 1rem;
  text-align: start;
  text-shadow: 1px 1px 2px black, 0 0 1em ${Colors.titleColor};
  color: ${Colors.titleColor};
  border: 1px solid ${Colors.titleColor};
  background-color: ${Colors.mainColor};
`;

export const TD = styled.td`
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #e8e9eb;

  @media screen and (max-width: 900px) {
    display: block;
    text-align: right;

    &::before {
      content: attr(aria-label);
      float: left;
      font-weight: bold;
    }
  }
`;
