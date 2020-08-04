import React, { Component } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
    axios('/favorites').then(res => {
      console.log(res)
      this.setState({ favorites: res.data })
    }).catch(err => console.log(err))
  }
  render() {
    let favorites
    this.state.favorites.length ?
      favorites = this.state.favorites.map((favorite, i) => {
        return (
          <Link to={`/post/${favorite.id}`}>
            <div className="individual" key={i}>
              <p># {favorite.username}'s favorite band is {favorite.favorite_band}</p>
            </div>
          </Link>
        )
      }) : favorites = null

    return (
      <div className='dashboard'>
        <div className="favorites-holder">
          {this.state.favorites ? favorites : null}
        </div>
      </div>
    )
  }
}
export default Dashboard



// import React, { Component } from 'react';
// import './Dashboard.css';


// class Dashboard extends Component {
//   render() {
//     return (
//         <div class="container">
//           <form>
//             <div class="input-group">
//             <input type="text" class="form-control"  placeholder="Search" name="search"/>
//             <div class="input-group-btn">
//             <button class="btn btn-default" type="submit">
//             <i class="glyphicon glyphicon-search"></i></button>
//             </div>
//             <div className="reset-btn">
//             <button type="submit">Reset</button>
//             </div>
//           </div>
//           </form>
//           <form>
//             <input className="my-posts" type="checkbox" name="posts" value="Posts"/>My Posts
//             {/* <input type="submit" value="Submit"/> */}
//           </form>
//         </div>

//       // <div>  
//       //   <form class="example" action="action_page.php">
//       //     <input type="text" placeholder="Search.." name="search" />
//       //     <button type="submit"><i class="fa fa-search"></i></button>
//       //   </form>
//       // </div>
//     )
//   }
// };

// export default Dashboard;