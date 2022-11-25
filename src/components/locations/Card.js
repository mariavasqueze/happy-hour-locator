import React, { Fragment, useContext } from "react";

import { Col, Row, Card as CardBS, Button } from "react-bootstrap";

import { Container } from "../common";
import { UserContext } from "../../context";

const { Img, Body, Text } = CardBS;

export default function Card({
  location,
  showEvents,
  onReturnClick,
  onSeeEventsClick,
  onRegisterEventClick,
}) {
  const { currentUser } = useContext(UserContext);

  return (
    <Col xs={12} className="cardContainerLocation">
      {onReturnClick && <Button onClick={() => onReturnClick()}>Return</Button>}

      <CardBS>
        <Container noFluid>
          <Row>
            <Col xs={12} sm={6}>
              <Img src={location.image} />
            </Col>

            <Col xs={12} sm={6}>
              <Body>
                <h4>{location.locationName}</h4>
                <div>{location.address}</div>

                <br />

                {currentUser && (
                  <Fragment>
                    <h6>Happy Hour Description</h6>
                    <Text>{location.happyHourDescription}</Text>

                    {!showEvents && (
                      <Button
                        variant="primary"
                        className="purpleBtn"
                        onClick={() => onSeeEventsClick()}
                      >
                        See Events
                      </Button>
                    )}

                    {showEvents && (
                      <Fragment>
                        <h4>Upcoming Events</h4>
                        {location.events.map((event) => (
                          <Fragment>
                            <h6>{event.eventName}</h6>
                            <Text>{event.eventDescription}</Text>
                            <h6>Event Times:</h6>
                            <table>
                              <tbody>
                                <tr>
                                  <td>From:</td>
                                  <td>
                                    {event.eventDateFrom.toDateString()},{" "}
                                    {event.eventDateFrom.toLocaleTimeString()}
                                  </td>
                                </tr>
                                <tr>
                                  <td>To:</td>
                                  <td>
                                    {event.eventDateTo.toDateString()},{" "}
                                    {event.eventDateTo.toLocaleTimeString()}
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            {onRegisterEventClick && !event.registered && (
                              <Button
                                variant="primary"
                                className="purpleBtn"
                                onClick={() => onRegisterEventClick()}
                              >
                                Register to Event
                              </Button>
                            )}
                          </Fragment>
                        ))}
                      </Fragment>
                    )}
                  </Fragment>
                )}
              </Body>
            </Col>
          </Row>
        </Container>
      </CardBS>
    </Col>
  );
}
