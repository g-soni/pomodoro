import * as React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import BASE_ROUTE from '../constants/routes';
import App from '../containers/App';
import Pomodoro from '../containers/Pomodoro';

export default (
  <Route path={BASE_ROUTE} component={App}>
    <IndexRoute component={Pomodoro} />
    <Redirect from="/*" to={BASE_ROUTE} />
  </Route>
);
