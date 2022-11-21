import React from "react";
import { Row } from "react-bootstrap";

import { WhiteCenteredContainer } from "../../common";
import Card from "./Card";

import "./style.css";

//TODO: change to api call
const events = [
  {
    eventId: 1,
    eventName: "Opening Night, 10% discount in Margaritas",
    eventDateFrom: new Date(2022, 11, 13, 14, 0, 0, 0),
    eventDateTo: new Date(2022, 11, 13, 18, 0, 0, 0),
    eventDescription: "Opening ceremony",
    locationName: "Rogue",
    image:
      "https://b.zmtcdn.com/data/pictures/9/16623959/5bee2d021a20dcbdf3da38f629862302.jpg",
    codes: [
      { code: "code1", redeemed: false },
      { code: "code2", redeemed: true },
    ],
  },
  {
    eventId: 2,
    eventName: "Dance Party, 5% discount in beers",
    eventDateFrom: new Date(2022, 11, 18, 18, 0, 0, 0),
    eventDateTo: new Date(2022, 11, 23, 23, 0, 0, 0),
    eventDescription: "Every night from 06:00pm to 11:00pm",
    locationName: "Buffalo Wild Wings",
    image:
      "https://ewscripps.brightspotcdn.com/dims4/default/e3f60cd/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fsharing.kjrh.com%2Fsharescnn%2Fphoto%2F2018%2F06%2F02%2FGettyImages-913487306_1527944641429_88677331_ver1.0_640_480.jpg",
    codes: [
      { code: "code1", redeemed: false },
      { code: "code2", redeemed: false },
    ],
  },
];

export default function Dashboard() {
  const scannedCode = (code) => {
    console.log(code);
  };

  return (
    <WhiteCenteredContainer>
      <h2>Events</h2>

      <Row>
        {events.map((event) => (
          <Card key={event.eventId} event={event} scannedCode={scannedCode} />
        ))}
      </Row>
    </WhiteCenteredContainer>
  );
}
