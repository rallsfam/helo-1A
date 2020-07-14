import React, { Component }from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
    render () {
        return (
            <div>
                Nav
            <button>Home</button>
            <button>New Post</button>
            <button>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState = reduxState;

export default Nav;
