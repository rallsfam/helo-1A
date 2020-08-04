// import React from 'react'
// import { Link, withRouter } from 'react-router-dom'
// // import home from '../../assets/home.png'
// // import profile from '../../assets/profile.png'
// // import newPost from '../../assets/document.png'
// // import power from '../../assets/power.png'
// import './Nav.css'
// import axios from 'axios'

// const Nav = props => {
//   return (
//     <div className='Nav'>
//       {/* <div className="nav_profile_container">
//         <img className="nav_profile_pic" src={profile}>
//         </img>
//         <p>1</p>
//       </div> */}
//       <div className="nav_links">
//         <Link to='/dashboard'><img src={home} /></Link>
//         <Link to='/new'><img src={newPost} /></Link>
//         <img src={power} style={{ cursor: "pointer" }} onClick={() => {
//           axios.get('/logout').then(props.history.push('/')).catch(err => console.log(err))
//         }} />
//       </div>
//     </div>)
// }
// export default withRouter(Nav)



import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { updateUserData } from '../../ducks/reducer';
import './Nav.css'


function Nav(props) {
  console.log(props, 'mmaaah prroooppss!!!')
  return (
    <div className='Nav'>
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to="/post/:postid">
        <button>New Post</button>
      </Link>
      <Link to="/">
         <button>Logout</button>
      </Link>
    </div>
  )
};

// function mapStateToProps(state) {
//   const { name, image } = state.user;

//   return {
//     name,
//     image,
//   }
// };

export default connect(null, {updateUserData})(Nav);