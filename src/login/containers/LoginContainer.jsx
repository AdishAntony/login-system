import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Redirect } from "react-router-dom";
import * as LoginActions from '../actions/loginActions';
import '../login.css';

export class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""}
    }

    changeUsername = (event) => {
        this.setState({username: event.target.value})
    }

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.actions.attemptLogin({
            username : this.state.username, 
            password : this.state.password
        });
    }

    render() {
        // redirecting if already login
        if(this.props.isLoggedIn === true){
            return <Redirect to={'/users'} />
        }
        return (
            <div className="user-login-container">
                <div className="container">
                    <div className="login-form">
                        <div className="main-div">
                                <h2>Login</h2>
                                <p>Please enter your username and password</p>
                            <form id="login" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control" 
                                        id="inputUsername"       
                                        placeholder='Username'
                                        value={this.state.username}
                                        onChange={this.changeUsername}
                                        required/>
                                </div>
                                <div className="form-group">
                                    <input type="password" 
                                        className="form-control" 
                                        id="inputPassword"                         
                                        placeholder='Password'
                                        value={this.state.password}
                                        onChange={this.changePassword}
                                        required/>
                                </div>
                                <button type="submit" 
                                    className="btn btn-primary"
                                    value="Submit">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Define the property types of this Container Component
LoginContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}

// This maps the state to the property of the component
function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        isLoggedIn: state.login.isLoggedIn
    }
}

// This maps the dispatch to the property of the component
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LoginActions, dispatch)
    }
}

// The connect function connects the Redux Dispatch and state to the Todo Container Component.
// Without this the Component wont be functional.
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);