import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Card as CardBS, Button } from "react-bootstrap";
import QRCode from "react-qr-code";
import { BrowserQRCodeReader } from "@zxing/library";

const { Body, Text } = CardBS;

const codeReader = new BrowserQRCodeReader();
let selectedDeviceId;

codeReader
  .getVideoInputDevices()
  .then(
    (videoInputDevices) => (selectedDeviceId = videoInputDevices[0].deviceId)
  );

export default function Card({ event, codes, scannedCode }) {
  const [readingCode, setReadingCode] = useState(false);

  const decodeOnce = useCallback(() => {
    codeReader
      .decodeFromInputVideoDevice(selectedDeviceId, "video")
      .then((result) => {
        scannedCode(result.text, event);
        codeReader.reset();
        setReadingCode(false);
      })
      .catch((err) => {
        console.error(err);
        codeReader.reset();
        setReadingCode(false);
      });
  }, [scannedCode, event]);

  useEffect(() => {
    if (readingCode) decodeOnce();
  }, [readingCode, decodeOnce]);

  const scanCodeHandler = () => {
    if (readingCode) {
      codeReader.reset();
      setReadingCode(false);
    } else {
      setReadingCode(true);
    }
  };

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
                      {new Date(
                        (event.eventDateFrom?.seconds ?? 0) * 1000
                      ).toDateString()}
                      ,{" "}
                      {new Date(
                        (event.eventDateFrom?.seconds ?? 0) * 1000
                      ).toLocaleTimeString()}
                    </td>
                  </tr>
                  <tr>
                    <td>To:</td>
                    <td>
                      {new Date(
                        (event.eventDateTo?.seconds ?? 0) * 1000
                      ).toDateString()}
                      ,{" "}
                      {new Date(
                        (event.eventDateTo?.seconds ?? 0) * 1000
                      ).toLocaleTimeString()}
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
              <Button
                variant="primary"
                id="btnScanCode"
                onClick={() => scanCodeHandler()}
              >
                {readingCode ? "Stop Scanning" : "Scan QR Code"}
              </Button>
            </Col>

            <Col>{readingCode && <video id="video" width="100%"></video>}</Col>
          </Row>

          <br />

          <Row>
            {codes
              .filter((cod) => cod.redemeed)
              .map((code) => (
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
