import React, { Component } from 'react';
import "circular-std";
import './App.css';
import './styles/Form.css';
import { Switch,BrowserRouter, Route, Router } from 'react-router-dom'
import routeDefinitions from './routes'

class App extends Component {

  render() {
    const routes = routeDefinitions.map(({
      path, component,exact, key,name
    }) => {
      return (
        <Route
          exact={Boolean(exact)}
          path={path}
          component={component}
          name={name}
          key={key}
        />
      )
    });
    return (
      <BrowserRouter> 
      <Switch>
        {routes}
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
