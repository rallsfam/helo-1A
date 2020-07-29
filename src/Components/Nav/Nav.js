import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import home from '../../assets/home.png'
import profile from '../../assets/profile.png'
import newPost from '../../assets/document.png'
import power from '../../assets/power.png'
import './Nav.css'
import axios from 'axios'

const Nav = props => {
  return (
    <div className='Nav'>
      <div className="nav_profile_container">
        <img className="nav_profile_pic" src={profile}>
        </img>
        <p>1</p>
      </div>
      <div className="nav_links">
        <Link to='/dashboard'><img src={home} /></Link>
        <Link to='/new'><img src={newPost} /></Link>
        <img src={power} style={{ cursor: "pointer" }} onClick={() => {
          axios.get('/logout').then(props.history.push('/')).catch(err => console.log(err))
        }} />
      </div>
    </div>)
}
export default withRouter(Nav)
