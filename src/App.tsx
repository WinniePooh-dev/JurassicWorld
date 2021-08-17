import React from 'react';
import {Header} from './components/Header';
import JurassicTable from './components/table';

export const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <JurassicTable />
    </div>
  );
};
