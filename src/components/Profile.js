import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export const Profile = ({user}) => {
  const position = [
    parseFloat(user['address']['geo']['lat']),
    "Nan" ? -0.7677 : parseFloat(user['address']['geo']['lng'])
  ]

  return (
    <Container fluid>
      <Row>
        <Col sm={5} className="basic-info">
          <Row sm={7} className="user-info pb-1">
            <Image
              className="user-picture"
              src={user.profilepicture}
              alt={user.name}
              roundedCircle
            />
            <Row className="row-height">
              <Col className="user-details info-detail">
                <p style={{textAlign: 'center'}}>
                  {user.name}
                </p>
              </Col>
            </Row>
            <Row className="row-height">
              <Col sm={5} className="user-details info-name">
                <p className="float-right mr-2">Username{' '}:</p>
              </Col>
              <Col sm={7} className="user-details info-detail">
                <p className="float-left w-75">{user.username}</p>
              </Col>
            </Row>
            <Row className="row-height">
              <Col sm={5} className="user-details info-name">
                <p className="float-right mr-2">e-mail{' '}:</p>
              </Col>
              <Col sm={7} className="user-details info-detail">
                <p className="float-left w-75">{user.email}</p>
              </Col>
            </Row>
            <Row className="row-height">
              <Col sm={5} className="user-details info-name">
                <p className="float-right mr-2">Phone{' '}:</p>
              </Col>
              <Col sm={7} className="user-details info-detail">
                <p className="float-left w-75">{user.phone}</p>
              </Col>
            </Row>
            <Row className="row-height">
              <Col sm={5} className="user-details info-name">
                <p className="float-right mr-2">Website{' '}:</p>
              </Col>
              <Col sm={7} className="user-details info-detail">
                <p className="float-left w-75">{user.website}</p>
              </Col>
            </Row>
          </Row>
          <div className="d-flex justify-content-center">
            <div className="separator"></div>
          </div>
          <Row sm={7} className="user-info company">
            <Row className="row-height">
              <Col className="user-details info-name">
                <p style={{textAlign: 'center'}}>
                  Company
                </p>
              </Col>
            </Row>
            <Row className="row-height">
              <Col sm={5} className="user-details info-name">
                <p className="float-right mr-2">Name{' '}:</p>
              </Col>
              <Col sm={7} className="user-details info-detail">
                <p className="float-left w-75">{user['company']['name']}</p>
              </Col>
            </Row>
            <Row className="row-height">
              <Col sm={5} className="user-details info-name">
                <p className="float-right mr-2 w-80">catchphrase{' '}:</p>
              </Col>
              <Col sm={7} className="user-details info-detail">
                <p className="float-left w-75">{user['company']['catchPhrase']}</p>
              </Col>
            </Row>
            <Row className="row-height">
              <Col sm={5} className="user-details info-name">
                <p className="float-right mr-2">bs{' '}:</p>
              </Col>
              <Col sm={7} className="user-details info-detail">
                <p className="float-left w-75">{user['company']['bs']}</p>
              </Col>
            </Row>
          </Row>
        </Col>
        <div>
          <div className="col-separator"></div>
        </div>
        <Col sm={6} className="user-info address-container">
          <Row className="row-height">
            <Col className="user-details info-name">
              <p>
                Address
              </p>
            </Col>
          </Row>
          <Row className="row-height">
            <Col sm={3} className="user-details info-name">
              <p className="float-right mr-2">Street{' '}:</p>
            </Col>
            <Col sm={9} className="user-details info-detail">
              <p className="w-75">{user['address']['street']}</p>
            </Col>
          </Row>
          <Row className="row-height">
            <Col sm={3} className="user-details info-name">
              <p className="float-right mr-2">Suite{' '}:</p>
            </Col>
            <Col sm={9} className="user-details info-detail">
              <p className="w-75">{user['address']['suite']}</p>
            </Col>
          </Row>
          <Row className="row-height">
            <Col sm={3} className="user-details info-name">
              <p className="float-right mr-2">City{' '}:</p>
            </Col>
            <Col sm={9} className="user-details info-detail">
              <p className="w-75">{user['address']['city']}</p>
            </Col>
          </Row>
          <Row className="row-height">
            <Col sm={3} className="user-details info-name">
              <p className="float-right mr-2">Zipcode{' '}:</p>
            </Col>
            <Col sm={9} className="user-details info-detail">
              <p className="w-75">{user['address']['zipcode']}</p>
            </Col>
          </Row>
          <div className="map-container">
            <MapContainer className="map" center={position} zoom={2} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  {user['address']['street']}{', '}
                  {user['address']['suite']}{', '}
                  {user['address']['city']}{', '}
                  {user['address']['zipcode']}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <Row className="row-height pt-1">
            <Col md={6}></Col>
            <Col md={3}>
              <small className="user-details info-name">
                Lat:
              </small>{' '}
              <small className="user-details info-detail">
                {position[0]}
              </small>
            </Col>
            <Col md={3}>
              <small className="user-details info-name">
                Long:
              </small>{' '}
              <small className="user-details info-detail">
                {position[1]}
              </small>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile;
