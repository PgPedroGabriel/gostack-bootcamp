import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart/index';
import Main from './pages/Main/index';
import Page404 from './pages/404/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/cart" component={Cart} />
      <Route component={Page404} />
    </Switch>
  );
}
