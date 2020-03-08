import React from 'react'

// import opLs from '../../utils/operationsLocalStorage'

import { Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => 
    true /*opLs.hasLs(opLs.token)*/ ? (
      <Component {...props} />
    ):(
      <Redirect to="/login" />
    )
  } />
)

export default PrivateRoute