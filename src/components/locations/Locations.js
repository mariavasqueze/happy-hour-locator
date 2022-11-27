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

function makeId(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function Locations() {
  const { currentUser } = useContext(UserContext);
  const { locations } = useContext(LocationsContext);
  const { getCodes, addCode, deleteCode } = useContext(FirebaseContext);

  const [center, setCenter] = useState({ lat: 49.28189, lng: -123.11755 });
  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedLocationDetails, setSelectedLocationDetails] = useState();
  const [map, setMap] = useState(null);
  const [bounded, setBounded] = useState(false);
  const [userCodes, setUserCodes] = useState([]);

  const onLoad = useCallback((map) => setMap(map), []);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDYZwKY6MD9Mq26RU6UpcblNIbRGcbm0rE",
  });

  const queryCodes = useCallback(async () => {
    if (currentUser) {
      const codes = await getCodes();

      setUserCodes(codes.filter((code) => code.data.uid === currentUser.uid));
    }
  }, [currentUser, getCodes]);

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
          lat: marker.data?.lat ?? 0,
          lng: marker.data?.lng ?? 0,
        });
      });
      map.fitBounds(bounds);

      setBounded(true);
    }
  }, [map, locations]);

  useEffect(() => {
    queryCodes();
  }, [queryCodes]);

  const registerToEventHandler = async (event) => {
    await addCode({
      ...event,
      redeemed: false,
      locationName: selectedLocationDetails.data.locationName,
      image: selectedLocationDetails.data.image,
      uid: currentUser.uid,
      code: makeId(8),
    });

    await queryCodes();
  };

  const unregisterToEventHandler = async (codeId) => {
    await deleteCode(codeId);
    await queryCodes();
  };

  return (
    <Container className="backgroundLocation">
      <Row>
        <Col xs={12} sm={4}>
          {selectedLocationDetails ? (
            <Card
              key={selectedLocationDetails.id}
              location={selectedLocationDetails.data}
              codes={userCodes}
              onReturnClick={() => setSelectedLocationDetails(undefined)}
              onRegisterEventClick={registerToEventHandler}
              onUnRegisterEventClick={unregisterToEventHandler}
              showEvents
            />
          ) : (
            locations.map((location) => (
              <Card
                key={location.id}
                location={location.data ?? []}
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
                    key={"marker" + location.data?.locationName}
                    position={{
                      lat: location.data?.lat ?? 0,
                      lng: location.data?.lng ?? 0,
                    }}
                    onClick={() =>
                      setSelectedLocation({
                        name: location.data.locationName,
                        lat: location.data?.lat ?? 0,
                        lng: location.data?.lng ?? 0,
                      })
                    }
                  >
                    {selectedLocation?.name === location.data?.locationName && (
                      <InfoWindow
                        onCloseClick={() => setSelectedLocation(undefined)}
                        zIndex={10}
                      >
                        <div className="markerStyle">
                          <Image src={location.data?.image} />
                          <h5>{location.data?.locationName}</h5>
                          <div>{location.data?.address}</div>

                          <br />

                          {currentUser && (
                            <Fragment>
                              <h6>Happy Hour Description</h6>
                              <div>
                                <b>{location.data?.happyHourDescription}</b>
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
