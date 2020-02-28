import React from 'react';
import moment from 'moment';

/**
 * The UserRow component is a simple stateless component, It simply shows the user information
 * @param {*} props 
 */
const UserRow = (props) => {
    return (
        <div className="col-md-6">
            <div className="card-box">
                <div className="card-title">
                    <h2>{props.user.name.title} {props.user.name.first} {props.user.name.last}</h2>
                    <p>Email: {props.user.email} </p>
                    <p>Username: {props.user.username} </p>
                    <p>Phone: {props.user.phone} </p>
                    <p>DOB: {moment.unix(props.user.dob).format('DD/MM/YYYY')} </p>
                </div>
            </div>
        </div>
    );
}

export default UserRow;