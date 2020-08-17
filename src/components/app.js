import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../routes/home';
import Detail from '../routes/detail';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/:id" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;
