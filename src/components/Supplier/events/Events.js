import React, { useEffect, useRef, useContext } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { WhiteCenteredContainer } from "../../common";
import "./style.css";
import { NavLink } from "react-router-dom";

import { FirebaseContext, LocationsContext } from "../../../context";

export default function Events({ location }) {
  const { putLocation, deleteLocation } = useContext(FirebaseContext);
  const { locations } = useContext(LocationsContext);

  useEffect(() => {
    console.log(location);

    const newLoc = JSON.parse(JSON.stringify(location));

    if (!newLoc.events) newLoc.events = [];

    newLoc.events.push({
      eventName: "New Event 4",
      eventDescription: "description for event 4",
      eventDateTo: new Date(),
      eventDateFrom: new Date(),
    });
    console.log(newLoc);
    // locations.forEach((location) => deleteLocation(location.id));
    putLocation(newLoc.locationName, newLoc);
  }, [location, putLocation]);

  const refStart = useRef();
  const refEnd = useRef();
  return (
    <WhiteCenteredContainer>
      <Row className="m-3">
        <p>NEW EVENT</p>{" "}
      </Row>

      <Form>
        <Row className="m-3">
          <Col>
            <Form.Label className="label">Event Name:</Form.Label>
          </Col>
          <Col xs={12} md={8}>
            <Form.Control className="inputForm" type="text" />
          </Col>
        </Row>

        <Row className="m-3">
          <Col xs={12} md={3}>
            <Form.Label className="label" required>
              Start Day:
            </Form.Label>
          </Col>
          <Col xs={12} md={3}>
            <Form.Control
              className="optsel"
              type="text"
              ref={refStart}
              onFocus={() => (refStart.current.type = "date")}
              onBlur={() => (refStart.current.type = "text")}
              id="startDay"
            />
          </Col>

          <Col xs={12} md={3}>
            <Form.Label className="label">End Day:</Form.Label>
          </Col>
          <Col xs={12} md={3}>
            <Form.Control
              className="optsel"
              type="text"
              ref={refEnd}
              onFocus={() => (refEnd.current.type = "date")}
              onBlur={() => (refEnd.current.type = "text")}
              id="endDay"
            />
          </Col>
        </Row>

        <Row className="m-3">
          <Col xs={12} md={3}>
            <Form.Label className="label">Start Time:</Form.Label>
          </Col>
          <Col xs={12} md={3}>
            <Form.Control className="optsel" type="time" id="startTime" />
          </Col>
          <Col xs={12} md={3}>
            <Form.Label className="label">End Time:</Form.Label>
          </Col>
          <Col xs={12} md={3}>
            <Form.Control className="optsel" type="time" id="endTime" />
          </Col>
        </Row>

        <div id="descdiv" className="m-4">
          <Form.Label className="label">
            Special Discounts / Description
          </Form.Label>
          <Form.Control id="inputDesc" type="text" />

          <Button
            id="eventBtn"
            className="purpleBtn"
            variant="primary"
            size="sm"
            type="submit"
          >
            Create Event
          </Button>
        </div>

        <NavLink id="linktoFAQ" to="/faq">
          Having any issues? Please Contact Us
        </NavLink>
      </Form>
    </WhiteCenteredContainer>
  );
}
