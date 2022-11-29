import React from "react";
import { Col, Row, Card as CardBS, Button } from "react-bootstrap";
import QRCode from "react-qr-code";

const { Img, Body, Text } = CardBS;

export default function Card({ code, codeId, onUnRegisterEventClick }) {
  return (
    <Col xs={12} className={"cardContainer "}>
      <div className={code.redeemed ? "layer" : ""}></div>
      <Row>
        <Col xs={12} sm={6}>
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
                      {new Date(
                        (code.eventDateFrom?.seconds ?? 0) * 1000
                      ).toDateString()}
                      ,{" "}
                      {new Date(
                        (code.eventDateFrom?.seconds ?? 0) * 1000
                      ).toLocaleTimeString()}
                    </td>
                  </tr>
                  <tr>
                    <td>To:</td>
                    <td>
                      {new Date(
                        (code.eventDateTo?.seconds ?? 0) * 1000
                      ).toDateString()}
                      ,{" "}
                      {new Date(
                        (code.eventDateTo?.seconds ?? 0) * 1000
                      ).toLocaleTimeString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Body>
          </CardBS>
        </Col>

        <Col xs={12} sm={6} className="codeContainer">
          <QRCode size={150} value={code.code} />
          <div>{code.code}</div>
          <div>
            Status:{" "}
            <span
              className={
                "statusCode " + (code.redeemed ? "statusGrey" : "statusGreen")
              }
            ></span>
            {code.redeemed ? " Redeemed " : " Available "}
          </div>
          <div>
            <Button
              variant="secondary"
              className="dangerBtn"
              onClick={() => onUnRegisterEventClick(codeId)}
            >
              Unregister
            </Button>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
