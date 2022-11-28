import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button, Form, Image } from "react-bootstrap";

import { WhiteCenteredContainer } from "../common";
import { UserContext, FirebaseContext } from "../../context";

import "./style.css";

export default function Profile() {
  const { currentUser, currentUserAdditionals } = useContext(UserContext);
  const {
    putUser,
    putUserPassword,
    putAdditional,
    getLocations,
    putLocation,
    addLocation,
  } = useContext(FirebaseContext);
  const [userData, setUserData] = useState();
  const [userDataAdditionals, setUserDataAdditionals] = useState();
  const [location, setLocation] = useState({});

  useEffect(() => {
    if (currentUser) {
      setUserData({
        ...currentUser,
        card: currentUser.additionals?.data?.card,
      });
    }
  }, [currentUser]);

  useEffect(() => {
    async function query() {
      if (currentUserAdditionals) {
        setUserDataAdditionals({
          ...currentUserAdditionals,
          card: currentUserAdditionals?.data?.card,
        });

        if (currentUserAdditionals?.data?.userType === 1) {
          const loc = await getLocations([["uid", "==", currentUser.uid]]);

          if (loc.length) {
            setLocation(loc[0].data);
          }
        }
      }
    }

    query();
  }, [currentUserAdditionals, getLocations, currentUser?.uid]);

  const getPhoto = () => {
    if (!currentUser) return "images/avatar.png";

    if (currentUser.photoURL) return currentUser.photoURL;
    else
      return "https://img.freepik.com/premium-vector/cool-nerdy-pizza-cartoon-avatar-illustration_448933-122.jpg?w=1060";
  };

  const onInputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const onInputChangeHandlerAdditionals = (event) => {
    const { name, value } = event.target;
    setUserDataAdditionals({ ...userDataAdditionals, [name]: value });
  };

  const onInputChangeHandlerLocation = (event) => {
    const { name, value } = event.target;
    setLocation({ ...location, [name]: value });
  };

  const submitHandler = async () => {
    await putUser(currentUser, {
      photoURL: userData?.photoURL,
      displayName: userData?.displayName,
      email: userData?.email,
    });

    if (userData.password) {
      await putUserPassword(currentUser, userData.password);
    }

    alert("User data updated!");
    window.location.reload();
  };

  const submitCardHandler = async () => {
    await putAdditional(userDataAdditionals.id, {
      ...userDataAdditionals.data,
      card: userDataAdditionals?.card
        ? "XX" +
          userDataAdditionals?.card.substring(
            userDataAdditionals?.card.length - 4,
            userDataAdditionals?.card.length
          )
        : "",
    });

    alert("Card data updated!");
    window.location.reload();
  };

  const submitLocationHandler = async () => {
    if (location.id) {
      await putLocation(location.id, location);
    } else {
      location.uid = currentUser.uid;
      await addLocation(location);
    }

    alert("Location data updated!");
    window.location.reload();
  };

  return (
    <WhiteCenteredContainer className="special">
      <h2 className="m-3">My Profile</h2>

      <section id="profile info">
        <Image
          className="profileImg m-3"
          rounded
          src={getPhoto()}
          roundedCircle
        ></Image>

        <Form>
          <Row className="m-3">
            <Col>
              <Form.Label className="label">Photo URL</Form.Label>
            </Col>

            <Col xs={12} md={8}>
              <Form.Control
                className="inputForm"
                type="text"
                placeholder=""
                name="photoURL"
                value={userData?.photoURL ?? ""}
                onChange={onInputChangeHandler}
              />
            </Col>
          </Row>

          <Row className="m-3">
            <Col>
              <Form.Label className="label">Name</Form.Label>
            </Col>

            <Col xs={12} md={8}>
              <Form.Control
                className="inputForm"
                type="text"
                placeholder="Your name"
                name="displayName"
                value={userData?.displayName ?? ""}
                onChange={onInputChangeHandler}
              />
            </Col>
          </Row>

          <Row className="m-3">
            <Col>
              <Form.Label className="label">Email address</Form.Label>
            </Col>

            <Col xs={12} md={8}>
              <Form.Control
                className="inputForm"
                type="email"
                placeholder="juanito@gmail.com"
                name="email"
                value={userData?.email ?? ""}
                onChange={onInputChangeHandler}
              />
            </Col>
          </Row>

          <Row className="m-3">
            <Col>
              <Form.Label className="label">Password</Form.Label>
            </Col>

            <Col xs={12} md={8}>
              <Form.Control
                className="inputForm mb-5"
                type="password"
                name="password"
                placeholder="******"
                onChange={onInputChangeHandler}
              />

              <Button
                className="purpleBtn"
                variant="primary"
                size="lg"
                onClick={() => submitHandler()}
              >
                Update Information
              </Button>
            </Col>
          </Row>
        </Form>
      </section>

      {currentUserAdditionals?.data?.userType === 0 && (
        <section id="paymentInfo">
          <Form>
            <Row className="m-3">
              <Col>
                <Form.Label className="paymentTitle">Payment Method</Form.Label>
                <Form.Control
                  className="inputForm mb-3"
                  id="paymentInput"
                  type="text"
                  placeholder="XX4242"
                  name="card"
                  value={userDataAdditionals?.card ?? ""}
                  onChange={onInputChangeHandlerAdditionals}
                />
              </Col>
            </Row>
            <Row className="m-3">
              <Col xs={12} md={8}>
                <Button
                  className="purpleBtn"
                  variant="primary"
                  size="lg"
                  onClick={() => submitCardHandler()}
                >
                  Change Card
                </Button>
              </Col>
            </Row>
            <Row className="m-3">
              <Form.Text className="text-muted m-2">
                Delete Account? - Please send us a request
              </Form.Text>
            </Row>
          </Form>
        </section>
      )}

      {currentUserAdditionals?.data?.userType === 1 && (
        <section id="locationInfo">
          <h2 className="m-3">Location</h2>
          <Image
            className="profileImg m-3"
            rounded
            src={location.image ?? ""}
          ></Image>

          <Form>
            <Row className="m-3">
              <Col>
                <Form.Label className="label">Photo URL</Form.Label>
              </Col>

              <Col xs={12} md={8}>
                <Form.Control
                  className="inputForm"
                  type="text"
                  placeholder=""
                  name="image"
                  value={location.image ?? ""}
                  onChange={onInputChangeHandlerLocation}
                />
              </Col>
            </Row>

            <Row className="m-3">
              <Col>
                <Form.Label className="label">Name</Form.Label>
              </Col>

              <Col xs={12} md={8}>
                <Form.Control
                  className="inputForm"
                  type="text"
                  placeholder=""
                  name="locationName"
                  value={location.locationName ?? ""}
                  onChange={onInputChangeHandlerLocation}
                />
              </Col>
            </Row>

            <Row className="m-3">
              <Col>
                <Form.Label className="label">Address</Form.Label>
              </Col>

              <Col xs={12} md={8}>
                <Form.Control
                  className="inputForm"
                  type="text"
                  placeholder=""
                  name="address"
                  value={location.address ?? ""}
                  onChange={onInputChangeHandlerLocation}
                />
              </Col>
            </Row>

            <Row className="m-3">
              <Col>
                <Form.Label className="label">Latitude</Form.Label>
              </Col>

              <Col xs={12} md={8}>
                <Form.Control
                  className="inputForm"
                  type="text"
                  placeholder=""
                  name="lat"
                  value={location.lat ?? ""}
                  onChange={onInputChangeHandlerLocation}
                />
              </Col>
            </Row>

            <Row className="m-3">
              <Col>
                <Form.Label className="label">Longitude</Form.Label>
              </Col>

              <Col xs={12} md={8}>
                <Form.Control
                  className="inputForm"
                  type="text"
                  placeholder=""
                  name="lng"
                  value={location.lng ?? ""}
                  onChange={onInputChangeHandlerLocation}
                />
              </Col>
            </Row>

            <Row className="m-3">
              <Col>
                <Form.Label className="label">
                  Happy Hour Description
                </Form.Label>
              </Col>

              <Col xs={12} md={8}>
                <Form.Control
                  className="inputForm"
                  type="text"
                  placeholder=""
                  name="happyHourDescription"
                  value={location.happyHourDescription ?? ""}
                  onChange={onInputChangeHandlerLocation}
                />
              </Col>
            </Row>

            <Row className="m-3">
              <Col xs={12} md={8}>
                <Button
                  className="purpleBtn"
                  variant="primary"
                  size="lg"
                  onClick={() => submitLocationHandler()}
                >
                  Update Location
                </Button>
              </Col>
            </Row>

            <Row className="m-3">
              <Form.Text className="text-muted m-2">
                Delete Account? - Please send us a request
              </Form.Text>
            </Row>
          </Form>
        </section>
      )}
    </WhiteCenteredContainer>
  );
}
