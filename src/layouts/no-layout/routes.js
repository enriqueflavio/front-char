import React from 'react'

import { Route} from 'react-router-dom'
import NoLayout from './index'
import Login from '../../pages/login/index'

const Routes = () => (
  <NoLayout>
    <Route exact path="/login" component={Login} />
  </NoLayout>
)

export default Routes