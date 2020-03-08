import React from 'react'

import { Route} from 'react-router-dom'
import NoLayout from './index'
import Dashboard from '../../pages/dashboard/index'

const Routes = () => (
  <NoLayout>
    <Route exact path="/" component={Dashboard} />
  </NoLayout>
)

export default Routes