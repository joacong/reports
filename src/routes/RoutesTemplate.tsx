import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import routes from './index';

export const RoutesTemplate = (props) => {
  return(
    <Router>
      <Switch>
        {
          routes.map((r, i) => (
            <Route
              path={r.path}
              component={() => <r.component />}
              exact={r.exact}     
              key={i}
            />
          ))
        }
      </Switch>
    </Router>
  )
}