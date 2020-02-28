import React from 'react';
import UserRow from './userRow'

/**
 * UserTable shows list of users
 * @param {*} props 
 */
const UserTable = (props) => {
    if(props.users.length > 0){
        return (
                props.users.map(user => {
                    return <UserRow
                        user={user.user}
                        key={user.user.registered}
                    />
                })
        )
    } else {
        return (
            <div className="row">
                <p>Nothing to display</p>
            </div>
        )
    }
}

export default UserTable;