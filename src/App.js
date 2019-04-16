import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import * as PAGES from './components/Pages'

import { LocaleProvider } from 'antd'
import fr_FR from 'antd/lib/locale-provider/fr_FR'

import { withAuthentication } from './services/sessions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocaleProvider locale={fr_FR}>
          <Router>
            <Switch>
              <Route exact path={ROUTES.HOME} component={PAGES.Home} />
              <Route exact path={ROUTES.SIGNIN} component={PAGES.Signin} />
            </Switch>
          </Router>
        </LocaleProvider>
      </div>
    );
  }
}

export default withAuthentication(App)
