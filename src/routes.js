import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PrivateRoute from './components/private-route'
import DrawerRoutes from './layouts/drawer/routes'
import NoLayoutRoutes from './layouts/no-layout/routes'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={NoLayoutRoutes} />
      <PrivateRoute path="/" component={DrawerRoutes} />
    </Switch>
  </BrowserRouter>
)

export default Routes