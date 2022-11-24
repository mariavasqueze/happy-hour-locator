import React, {
  useEffect,
  useState,
  useCallback,
  useContext,
  Fragment,
} from "react";

import { Row, Col, Image, Button } from "react-bootstrap";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";

import { UserContext } from "../../context"; //Maria

// import mainContext from "../../context";
import { Container } from "../common";
import Card from "./Card";

import "./style.css";

// //TODO: change to api call
const locations = [
  {
    locationName: "Rogue",
    happyHourDescription: "Monday to Friday: 2PM-6PM & 9PM-Close",
    address: "601 W Cordova St. Vancouver",
    lat: 49.28204,
    lng: -123.11852,
    image:
      "https://b.zmtcdn.com/data/pictures/9/16623959/5bee2d021a20dcbdf3da38f629862302.jpg",
    events: [
      {
        eventName: "Opening Night, 10% discount in Margaritas",
        eventDateFrom: new Date(2022, 11, 13, 14, 0, 0, 0),
        eventDateTo: new Date(2022, 11, 13, 18, 0, 0, 0),
        eventDescription: "Opening ceremony",
        registered: true,
      },
    ],
  },
  {
    locationName: "Buffalo Wild Wings",
    happyHourDescription: "Monday to Friday: 2PM-6PM & 9PM-Close",
    address: "985 Hornby St, Vancouver, BC V6Z 1V3",
    lat: 49.2847,
    lng: -123.11526,
    image:
      "https://ewscripps.brightspotcdn.com/dims4/default/e3f60cd/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fsharing.kjrh.com%2Fsharescnn%2Fphoto%2F2018%2F06%2F02%2FGettyImages-913487306_1527944641429_88677331_ver1.0_640_480.jpg",
    events: [
      {
        eventName: "Dance Party, 5% discount in beers",
        eventDateFrom: new Date(2022, 11, 18, 18, 0, 0, 0),
        eventDateTo: new Date(2022, 11, 23, 23, 0, 0, 0),
        eventDescription: "Every night from 06:00pm to 11:00pm",
      },
    ],
  },
];

export default function Locations() {
  // const { isLogged } = useContext(mainContext);
const { currentUser } = useContext(UserContext); //Mariaa

  const [center, setCenter] = useState({ lat: 49.28189, lng: -123.11755 });
  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedLocationDetails, setSelectedLocationDetails] = useState();
  const [map, setMap] = useState(null);
  const [bounded, setBounded] = useState(false);

  const onLoad = useCallback((map) => setMap(map), []);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDYZwKY6MD9Mq26RU6UpcblNIbRGcbm0rE",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      locations.forEach((marker) => {
        bounds.extend({
          lat: marker.lat,
          lng: marker.lng,
        });
      });
      map.fitBounds(bounds);

      setBounded(true);
    }
  }, [map]);

  const registerToEventHandler = (event) => {
    //TODO: request new code for event
  };

  return (
    <Container className="backgroundLocation">
      <Row>
        <Col xs={12} sm={4}>
          {selectedLocationDetails ? (
            <Card
              key={selectedLocationDetails.locationName}
              location={selectedLocationDetails}
              onReturnClick={() => setSelectedLocationDetails(undefined)}
              onRegisterEventClick={(event) => registerToEventHandler(event)}
              showEvents
            />
          ) : (
            locations.map((location) => (
              <Card
                key={location.locationName}
                location={location}
                onSeeEventsClick={() => setSelectedLocationDetails(location)}
              />
            ))
          )}
        </Col>

        <Col xs={12} sm={8}>
          {isLoaded && (
            <GoogleMap
              onLoad={onLoad}
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              {bounded &&
                locations.map((location) => (
                  <Marker
                    key={"marker" + location.locationName}
                    position={{
                      lat: location.lat,
                      lng: location.lng,
                    }}
                    onClick={() =>
                      setSelectedLocation({
                        name: location.locationName,
                        lat: location.lat,
                        lng: location.lng,
                      })
                    }
                  >
                    {selectedLocation?.name === location.locationName && (
                      <InfoWindow
                        onCloseClick={() => setSelectedLocation(undefined)}
                        zIndex={10}
                      >
                        <div className="markerStyle">
                          <Image src={location.image} />
                          <h5>{location.locationName}</h5>
                          <div>{location.address}</div>
                          <br />
                          {currentUser && (
                            <Fragment>
                              <h6>Happy Hour Description</h6>
                              <div>
                                <b>{location.happyHourDescription}</b>
                              </div>
                              <Button
                                className="purpleBtn"
                                variant="primary"
                                onClick={() =>
                                  setSelectedLocationDetails(location)
                                }
                              >
                                See Events
                              </Button>
                            </Fragment>
                          )}
                        </div>
                      </InfoWindow>
                    )}
                  </Marker>
                ))}
            </GoogleMap>
          )}
        </Col>
      </Row>
    </Container>
  );
}
