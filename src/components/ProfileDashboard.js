import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestApiData } from '../redux/actions';

import DashboardHeader from './DashboardHeader';
import Profile from './Profile';
import Posts from './Posts';
import Gallery from './Gallery';
import ToDo from './ToDo';
import Chat from './Chat';

class ProfileDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: 'Profile'
    }
  }
  
  componentDidMount() {
    this.props.requestApiData();
  }

  handleSelect = (k) => {
    this.setState({
      tabActive: k
    });
  }

  render() {
    const { match } = this.props;
    const { users = [] } = this.props.data;
    
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
                  <Nav.Link eventKey="Profile" onSelect={(k) => this.handleSelect(k)}>Profile</Nav.Link>
                </Nav.Item>
                <div className="divider"></div>
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="Posts" onSelect={(k) => this.handleSelect(k)}>Posts</Nav.Link>
                </Nav.Item>
                <div className="divider"></div>
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="Gallery" onSelect={(k) => this.handleSelect(k)}>Gallery</Nav.Link>
                </Nav.Item>
                <div className="divider"></div>
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="ToDo" onSelect={(k) => this.handleSelect(k)}>ToDo</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10} className="content">
              <Tab.Content>
                <DashboardHeader header={this.state.tabActive} users={users} user={user} />
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
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDashboard);
