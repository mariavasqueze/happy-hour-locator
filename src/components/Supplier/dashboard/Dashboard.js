import React, { useState, useEffect, useContext, useCallback } from "react";
import { Row, Button } from "react-bootstrap";

import { UserContext, FirebaseContext } from "../../../context";
import { WhiteCenteredContainer } from "../../common";
import Card from "./Card";
import Events from "../events/Events";

import "./style.css";

export default function Dashboard() {
  const [location, setLocation] = useState({});
  const [events, setEvents] = useState([]);
  const [codes, setCodes] = useState([]);
  const [addingEvent, setAddingEvent] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { getLocations, putLocation, getCodes } = useContext(FirebaseContext);
  console.log(codes);
  useEffect(() => {
    async function query() {
      if (currentUser) {
        const loc = await getLocations([["uid", "==", currentUser.uid ?? 0]]);

        if (loc.length) {
          setLocation(loc[0].data);
          setEvents(loc[0].data.events ?? []);
        }
      }
    }

    query();
  }, [currentUser, getLocations]);

  const queryCodes = useCallback(async () => {
    if (currentUser && location) {
      setCodes(
        await getCodes([["locationId", "==", location.locationName ?? 0]])
      );
    }
  }, [currentUser, getCodes, location]);

  useEffect(() => {
    queryCodes();
  }, [queryCodes]);

  const scannedCode = (code, event) => {
    if (
      codes
        .filter(
          (cod) => !cod.data.redeemed && cod.data.eventName === event.eventName
        )
        .some((cod) => cod.data.code === code)
    ) {
      alert("Code scanned successfuly!");
    } else {
      alert("Code not found!");
    }
  };

  if (addingEvent) {
    return <Events location={location} />;
  }

  return (
    <WhiteCenteredContainer>
      <h2>Events</h2>

      <Button
        variant="primary"
        id="btnScanCode"
        onClick={() => setAddingEvent(true)}
      >
        Add Event
      </Button>

      <Row>
        {events.map((event) => (
          <Card
            key={event.eventName}
            event={event}
            codes={codes}
            scannedCode={scannedCode}
          />
        ))}
      </Row>
    </WhiteCenteredContainer>
  );
}
