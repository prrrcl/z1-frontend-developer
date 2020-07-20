import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'wouter'

// Contexts
import AppProvider from 'shared/context/app/appContext'

// Pages
import Home from 'app/pages/home'
import Scanner from 'app/pages/scanner'

import * as serviceWorker from './serviceWorker'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Switch>

        <Route path="/">
          <Home />
        </Route>
        
        <Route path="/scanner">
          <Scanner />
        </Route>

        <Route>
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
