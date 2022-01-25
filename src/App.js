import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Portfolio from './pages/ Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <Portfolio /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
