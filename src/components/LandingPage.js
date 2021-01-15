import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import Wave from './Wave';
import { UsersContext } from '../contexts/UsersContext';

export const LandingPage = () => {
  const { users } = useContext(UsersContext);

  const getUsers = () => {
    return (
      <ul>
        {users.map(user => {
          return (
            <li key={user.id} className="list-item">
              <Link to={`/profile/${user.id}`}>
                <Image
                  className="picture mr-2"
                  src={user.profilepicture}
                  width="30"
                  height="30"
                  roundedCircle
                />
                <p className="user">{user.name}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="parent-container" >
      <div className="svg-container">
        <Wave />
      </div>
      <div className="users-container shadow-lg">
        <h4 className="account-header">Select an account</h4>
        <div className="account-list">
          {getUsers()}
        </div>
      </div>
    </div>
  )
}

export default LandingPage;