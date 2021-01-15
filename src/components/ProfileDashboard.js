import React, {useState, useContext} from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import { UsersContext } from '../contexts/UsersContext';
import DashboardHeader from './DashboardHeader';
import Profile from './Profile';
import Posts from './Posts';
import Gallery from './Gallery';
import ToDo from './ToDo';
import Chat from './Chat';

export const ProfileDashboard = ({ match }) => {
  const { users } = useContext(UsersContext);
  const [tabActive, setTabActive] = useState('Profile');
  
  const user = users.filter(user => {
    return user.id === parseInt(match.params.id)
  })[0];

  return (
    <div className="dashboard-container">
      <Tab.Container id="profile-dashboard" defaultActiveKey="Profile">
        <Row className="dashboard">
          <Col sm={2} className="nav-container">
            <Nav className="flex-column nav">
              <Nav.Item className="nav-item">
                <Nav.Link eventKey="Profile" onSelect={(k) => { setTabActive(k)}}>Profile</Nav.Link>
              </Nav.Item>
              <div className="divider"></div>
              <Nav.Item className="nav-item">
                <Nav.Link eventKey="Posts" onSelect={(k) => { setTabActive(k)}}>Posts</Nav.Link>
              </Nav.Item>
              <div className="divider"></div>
              <Nav.Item className="nav-item">
                <Nav.Link eventKey="Gallery" onSelect={(k) => { setTabActive(k)}}>Gallery</Nav.Link>
              </Nav.Item>
              <div className="divider"></div>
              <Nav.Item className="nav-item">
                <Nav.Link eventKey="ToDo" onSelect={(k) => { setTabActive(k)}}>ToDo</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10} className="content">
            <Tab.Content>
              <DashboardHeader header={tabActive} users={users} user={user} />
              <Tab.Pane eventKey="Profile">
                <Profile user={user} />
              </Tab.Pane>
              <Tab.Pane eventKey="Posts">
                <Posts />
              </Tab.Pane>
              <Tab.Pane eventKey="Gallery">
                <Gallery />
              </Tab.Pane>
              <Tab.Pane eventKey="ToDo">
                <ToDo />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Chat users={users} />
    </div>
  )
}

export default ProfileDashboard;
