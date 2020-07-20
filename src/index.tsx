import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'wouter'
import AppProvider from 'shared/context/appContext'
import * as serviceWorker from './serviceWorker'
import Home from 'app/pages/home'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Switch>
        {/* TODO: make private routes */}
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
