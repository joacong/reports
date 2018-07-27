import * as React from 'react';
import './App.css';
import BoardListContainer from './boards/containers/BoardListContainer';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <BoardListContainer />
    );
  }
}

export default App;
