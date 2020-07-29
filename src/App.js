import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav/Nav'
import Router from './Router'
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*checking location to show Nav component if we aren't on the landing page */}
        {this.props.location.pathname == '/' ? null : <Nav />}
        <Router />
      </div>
    )
  }
}
//need to use withRouter to access location prop
export default withRouter(App);
