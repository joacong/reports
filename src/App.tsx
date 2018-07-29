import * as React from 'react';

import { SideBar, Main } from './layout';
import {
  BrowserRouter as Router
} from 'react-router-dom'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <SideBar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
