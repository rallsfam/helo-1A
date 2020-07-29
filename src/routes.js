import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './component/Auth/Auth'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Post from './component/Post/Post'
const Router = props => {
  return (

    <Switch>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/post/:id' component={Post} />
      <Route path='/new' component={Form} />
      <Route path='/' component={Auth} />
    </Switch>
  )
}
export default Routes