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

import { UserContext, LocationsContext } from "../../context";
import { Container } from "../common";
import Card from "./Card";

import "./style.css";

export default function Locations() {
  const { currentUser } = useContext(UserContext);
  const { locations } = useContext(LocationsContext);

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
  }, [map, locations]);

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
