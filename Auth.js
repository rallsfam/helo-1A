import React, { Component } from 'react'
import "./Auth.css"
import axios from 'axios';
import image from './image'
class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      signedIn: false
    }
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  handleLogin = () => {
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      this.handleRedirect()
    }).catch(err => { console.log('could not login') })

  }
  handleRegister = async () => {
    let result = await axios.post('/register', {
      username: this.state.username,
      password: this.state.password
    })
    console.log(result)
    if (result) {
      axios.post('/login', {
        username: this.state.username,
        password: this.state.password
      }).then(res => {
        this.handleRedirect();
      }).catch(err => console.log('could not login after registering'))
    }
  }
  handleRedirect = () => {
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className='Auth'>
        <div className='Modal'>
          <img src={image} alt="logo"></img>
          <h1>Helo</h1>
          <div className='inputs'>
            <p>Username :  </p>
            <input type='text' onChange={this.handleUsernameChange} />
          </div>
          <div className='inputs'>
            <p>Password : </p>
            <input type='password' onChange={this.handlePasswordChange} />
          </div>
          <div className='buttons'>
            <button onClick={this.handleLogin}> Login</button>
            <button onClick={this.handleRegister}> Register</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Auth



// import React, { Component } from 'react';
// import axios from "axios";
// import {connect} from 'react-redux';
// import { updateUserData } from '../../ducks/reducer';
// import './Auth.css';
// import image from './image'


// class Auth extends Component {
//   constructor(props) {
//     super(props);
    
//     // componentDidMount(); {
//       axios.get('/api/user-data').then(res => {
//         this.props.updateUserData(res.data);
//       });
//     // };

      
//     this.state = {
//       username: "",
//       password: ""
//     };
    
//     this.state = { username: "", password: "" };
//     this.handleUsernameInput = this.handleUsernameInput.bind(this);
//     this.handlePasswordInput = this.handlePasswordInput.bind(this);
//     this.handleRegister = this.handleRegister.bind(this);
//     this.handleLogin = this.handleLogin.bind(this);
//   };


//   handleUsernameInput(e) {
//     this.setState({ username: e.target.value });
//   }

//   handlePasswordInput(e) {
//     this.setState({ password: e.target.value });
//   }

//   handleRegister() {
//     let { username, password } = this.state;
//     console.log(username, password);
//     axios.post('/api/register-user', {
//         username,
//         password
//       })
//       .then(console.log('registration submit'))
//       .catch(err => console.log('front-end error', err));

//    this.props.history.push('/dashboard');    
//   }

//   async handleLogin() {
//     let { username, password } = this.state;
//     console.log(username, password);
//     await axios.post('/api/login-user', {
//         username,
//         password
//       })
//       .then(response => {
//         console.log('from front end reponse', response);
//         this.setState({ user: response.data });
//       })
//       .then(() => this.props.getUser(username, password))
//       .catch(err => console.log(err));

//     this.props.history.push('/dashboard');
//   };


//   render() {
//     const { updateUserData } = this.props;
//     let {user} = this.props

//     return (
//       <div>
//         <div className="input-box">
//         <p>Username:</p>
//         <input placeholder="Username" value={this.state.username} onChange={this.handleUsernameInput} />
//         </div>
//         <div className="input-box">
//         <p>Password:</p>
//         <input placeholder="Password" value={this.state.password} onChange={this.handlePasswordInput} />
//         </div>
//         <div className="login-register-button">
//         <br/>
//           {/* <button onClick={this.handleLogin}>Login</button> */}
//           <button onClick={ updateUserData(user) }>Login</button>
//           <button onClick={ () => updateUserData(user) }>Register</button>
//           {/* <button onClick={this.handleRegister}>Register</button> */}
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     user: state.user,
//   }
// };

// export default connect(mapStateToProps, {updateUserData})(Auth);