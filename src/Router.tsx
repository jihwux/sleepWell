import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Test from './routes/Test';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
}
