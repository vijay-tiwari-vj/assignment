import React from 'react';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';

export const DashboardHeader = ({header, users, user}) => {
  const user1 = users[0];
  const user2 = users[1];

  return (
    <div className="dashboard-header">
      <h4>{header}</h4>
      <Dropdown>
        <Dropdown.Toggle variant="none" id="dropdown-basic">
          <Image
            className="picture mr-2"
            src={user.profilepicture}
            width="30"
            height="30"
            roundedCircle
          />
          <p className="user">{user.name}</p>
        </Dropdown.Toggle>
        <Dropdown.Menu align="right" className="shadow-lg mb-2">
          <Dropdown.ItemText>
            <p className="user-details d-flex justify-content-center">
              <Image
                className="signed-in-pic"
                src={user.profilepicture}
                alt={user.name}
                roundedCircle
              />
            </p>
          </Dropdown.ItemText>
          <Dropdown.ItemText>
            <p className="user-details d-flex justify-content-center">
              {user.name}
            </p>
          </Dropdown.ItemText>
          <Dropdown.ItemText>
            <p className="info-name d-flex justify-content-center m-0">
              {user.email}
            </p>
          </Dropdown.ItemText>
          <Dropdown.Divider />
          <Dropdown.ItemText className="d-inline p-0">
            <p className="d-flex justify-content-center align-items-center">
              <Image
                className="picture mr-2"
                src={user1.profilepicture}
                width="30"
                height="30"
                roundedCircle
              />
              <small className="user">{user1.name}</small>
            </p>
          </Dropdown.ItemText>
          <Dropdown.Divider />
          <Dropdown.ItemText className="d-inline p-0">
            <p className="d-flex justify-content-center align-items-center">
              <Image
                className="picture mr-2"
                src={user2.profilepicture}
                width="30"
                height="30"
                roundedCircle
              />
              <small className="user">{user2.name}</small>
            </p>
          </Dropdown.ItemText>
          <Dropdown.ItemText className="d-flex justify-content-center align-items-center">
            <div className="sign-out">
              <a href="/">
                Sign out
              </a>
            </div>
          </Dropdown.ItemText>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DashboardHeader;
