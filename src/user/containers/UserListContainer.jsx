import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Redirect } from "react-router-dom";
import * as UserActions from '../actions/userActions'
import SearchUser from '../components/searchUser';
import UserTable from '../components/userTable';
import UserAddContainer from './UserAddContainer';
import '../user.css';

/**
 * User List Container methods dispatch the actions to the reducer functions. Ordered by CRUD Order
 * List users and allows to search users
 */
export class UserListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            addNew:false
        }
    }
    
    //Search
    filterUser = (event) => {
        this.props.actions.FilterUsers(event)
    }

    addNewClicked = () => {
        this.setState({addNew: true})
    }

    render() {
        // redirecting if already login
        if(this.props.isLoggedIn === false){
            return <Redirect to={'/'} />
        }
        if(this.state.addNew === true){
            return <Redirect to={'/user/create'} />
        }
        return (
            <div>
                <div className="container row">
                    {/* <button className="btn btn-primary mt-10" onClick={this.addNewClicked}> Add New </button>
                   */}
                    <div className="col-md-4">
                        <UserAddContainer/>
                    </div>
                    <div className="col-md-8">
                        <div className="mt-10">
                            <SearchUser search={this.filterUser} />
                        </div>
                        <div className="row mt-10">
                            <UserTable users={this.props.users} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Define the property types of this Container Component
UserListContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}

// This maps the state to the property of the component
function mapStateToProps(state, ownProps) {
    return {
        users: state.user,
        isLoggedIn: state.login.isLoggedIn
    }
}

// This maps the dispatch to the property of the component
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);