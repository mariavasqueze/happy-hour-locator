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

import { UserContext, LocationsContext, FirebaseContext } from "../../context";
import { Container } from "../common";
import Card from "./Card";

import "./style.css";

export default function Locations() {
  const { currentUser } = useContext(UserContext);
  const { locations } = useContext(LocationsContext);
  const { putUser } = useContext(FirebaseContext);

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
          lat: marker.data.lat,
          lng: marker.data.lng,
        });
      });
      map.fitBounds(bounds);

      setBounded(true);
    }
  }, [map, locations]);

  const registerToEventHandler = (id) => {
    putUser();
  };

  return (
    <Container className="backgroundLocation">
      <Row>
        <Col xs={12} sm={4}>
          {selectedLocationDetails ? (
            <Card
              key={selectedLocationDetails.id}
              location={selectedLocationDetails.data}
              onReturnClick={() => setSelectedLocationDetails(undefined)}
              onRegisterEventClick={(event) =>
                registerToEventHandler(
                  selectedLocationDetails.id,
                  selectedLocationDetails.data
                )
              }
              showEvents
            />
          ) : (
            locations.map((location) => (
              <Card
                key={location.id}
                location={location.data}
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
                    key={"marker" + location.data.locationName}
                    position={{
                      lat: location.data.lat,
                      lng: location.data.lng,
                    }}
                    onClick={() =>
                      setSelectedLocation({
                        name: location.data.locationName,
                        lat: location.data.lat,
                        lng: location.data.lng,
                      })
                    }
                  >
                    {selectedLocation?.name === location.data.locationName && (
                      <InfoWindow
                        onCloseClick={() => setSelectedLocation(undefined)}
                        zIndex={10}
                      >
                        <div className="markerStyle">
                          <Image src={location.data.image} />
                          <h5>{location.data.locationName}</h5>
                          <div>{location.data.address}</div>

                          <br />

                          {currentUser && (
                            <Fragment>
                              <h6>Happy Hour Description</h6>
                              <div>
                                <b>{location.data.happyHourDescription}</b>
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
