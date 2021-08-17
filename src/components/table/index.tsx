import React from 'react';
import {Table, TBody, TH, Thead, TR} from './styles';

const JurassicTable = (): JSX.Element => {
  return (
    <Table>
      <Thead>
        <TR>
          {headers.map((header, idx) => (
            <TH key={idx}>{header}</TH>
          ))}
        </TR>
      </Thead>
      <TBody></TBody>
    </Table>
  );
};

export default JurassicTable;

const headers = ['name', 'age', 'gender', 'time'];
