import React from 'react';
import { Route, Redirect, Switch, Router } from 'react-router-dom';
import Home from './containers/home'
import Result from './containers/result'
import Page404 from './containers/404'

export default ({...props}) => {
  return(
    <Router {...props}>
      <Switch>
        <Redirect
          exact
          path={'/'}
          to={'/home'}
        />
        <Route
          exact
          path='/home'
          component={Home}
        />
        <Route
          exact
          path='/result/:id'
          component={Result}
        />
        <Route
          path='*'
          component={Page404}
        />
      </Switch>
    </Router>
  )  
}