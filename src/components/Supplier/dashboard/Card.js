import React from "react";
import { Col, Row, Card as CardBS, Button } from "react-bootstrap";
import QRCode from "react-qr-code";

const { Body, Text } = CardBS;

export default function Card({ event }) {
  return (
    <Col xs={12} className="cardContainer">
      <Row>
        <Col xs={12} sm={6}>
          <CardBS>
            <Body>
              <h5>{event.eventName}</h5>
              <Text>{event.eventDescription}</Text>
              <h5>Event Times:</h5>
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
            </Body>
          </CardBS>
        </Col>

        <Col xs={12} sm={6}>
          <Row>
            <Col xs={12} sm={6}>
              <h3>Codes applied</h3>
            </Col>

            <Col xs={12} sm={6}>
              <Button variant="primary" id="btnScanCode">
                Scan QR Code
              </Button>
            </Col>
          </Row>

          <Row>
            {event.codes.map((code) => (
              <Col key={code.code}>
                <CardBS>
                  <Body>
                    <QRCode size={50} value={code.code} /> {code.code}
                  </Body>
                </CardBS>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
