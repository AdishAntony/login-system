import React, { Component } from 'react';
import * as UserActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import '../user.css';

export class UserAddContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.emptyUser()
        }
    }

    //Initializes a Empty Todo Object
    emptyUser = () => {
        return {
            gender: "male", 
            name:{
                title:"", 
                first:"", 
                last:""
            },
            email:"",
            username:"",
            password:"",
            dob:"",
            phone:"",
            registered:""
        }
    }
    
    filterUser = (keyword) => {
        this.props.actions.FilterUser(keyword)
    }

    changeGender = (event) => {
        this.setState({gender : event.target.value});
    }

    changeTitle = (event) => {
        this.setState({name : {title : event.target.value, first : this.state.name.first, last : this.state.name.last}});
    }

    changeFirstName = (event) => {
        this.setState({name : {title : this.state.name.title, first : event.target.value, last : this.state.name.last}});
    }

    changeLastname = (event) => {
        this.setState({name : {title : this.state.name.title, first : this.state.name.first, last : event.target.value}});
    }

    handleChange = (event) => {
        this.setState({[event.target.id] : event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.actions.CreateUser({
            ...this.state, 
            dob: moment(this.state.dob).unix(), 
            registered: moment().unix()}
        );
        this.resetState();
    }

    resetState = ()=>{
        this.setState({
            ...this.emptyUser()
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 padding-20">
                    <form onSubmit={this.onSubmit}>
                        <div className="messages"></div>
                        <div className="controls">
                            <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Gender *</label>
                                    <select className="form-control" 
                                        id="gender" 
                                        onChange={this.changeGender}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Title *</label>
                                    <input      
                                        type="text"
                                        className="form-control"                  
                                        placeholder='Title'
                                        value={this.state.name.title}
                                        onChange={this.changeTitle}
                                        required="required"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Firstname *</label>
                                    <input  
                                        type="text"
                                        className="form-control"                      
                                        placeholder='Firstname'
                                        value={this.state.name.first}
                                        onChange={this.changeFirstName}
                                        required="required"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Lastname *</label>
                                    <input    
                                        type="text"
                                        className="form-control"                    
                                        placeholder='Lastname'
                                        value={this.state.name.last}
                                        onChange={this.changeLastname}
                                        required="required"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input   
                                        type="email"
                                        className="form-control"
                                        id="email"                     
                                        placeholder='Email'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        required="required"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Username *</label>
                                    <input  
                                        type="text"
                                        className="form-control"
                                        id="username"                      
                                        placeholder='Username'
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        required="required"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Password *</label>
                                    <input  
                                        type="password"
                                        className="form-control"
                                        id="password"                      
                                        placeholder='Password'
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        required="required"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>DOB *</label>
                                    <input  
                                        type="date"
                                        className="form-control"   
                                        id="dob"                   
                                        placeholder='DOB'
                                        value={this.state.dob}
                                        onChange={this.handleChange}
                                        required="required"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Phone *</label>
                                    <input 
                                        type="number"
                                        className="form-control" 
                                        id="phone"                      
                                        placeholder='Phone'
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        required="required"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <input type="submit" className="btn btn-success btn-send" value="Create User"/>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// Define the property types of this Container Component
UserAddContainer.propTypes = {
    actions: PropTypes.object.isRequired
}

// This maps the state to the property of the component
function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    };
}

// This maps the dispatch to the property of the component
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddContainer);