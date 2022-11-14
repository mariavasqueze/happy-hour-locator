import React from "react";
import { Col, Row, Card as CardBS } from "react-bootstrap";
import QRCode from "react-qr-code";

const { Img, Body, Text } = CardBS;

export default function Card({ code }) {
  return (
    <Col xs={12} className="cardContainer">
      <Row>
        <Col xs={6}>
          <CardBS>
            <Img variant="top" src={code.image} />
            <Body>
              <h3>{code.locationName}</h3>
              <h5>{code.eventName}</h5>
              <Text>{code.eventDescription}</Text>
              <h5>Event Times:</h5>
              <table>
                <tbody>
                  <tr>
                    <td>From:</td>
                    <td>
                      {code.eventDateFrom.toDateString()},{" "}
                      {code.eventDateFrom.toLocaleTimeString()}
                    </td>
                  </tr>
                  <tr>
                    <td>To:</td>
                    <td>
                      {code.eventDateTo.toDateString()},{" "}
                      {code.eventDateTo.toLocaleTimeString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Body>
          </CardBS>
        </Col>
        <Col xs={6} className="codeContainer">
          <QRCode size={150} value={code.code} />
        </Col>
      </Row>
    </Col>
  );
}
